create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null
    check (
      length(email) <= 254
      and btrim(email) ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ),
  email_normalized text generated always as (lower(btrim(email))) stored unique,
  source text not null default 'landing'
    check (length(source) between 1 and 40),
  consented_at timestamptz not null default now(),
  created_at timestamptz default now(),
  notified_at timestamptz
);

alter table public.waitlist_signups enable row level security;
revoke all on public.waitlist_signups from public, anon, authenticated;

create or replace function public.join_waitlist(
  p_email text,
  p_source text default 'landing'
)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_email text;
  inserted_id uuid;
begin
  normalized_email := lower(btrim(p_email));

  if normalized_email is null
     or length(normalized_email) > 254
     or normalized_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  then
    return 'invalid';
  end if;

  insert into public.waitlist_signups (email, source)
  values (
    normalized_email,
    case
      when p_source is not null and length(p_source) between 1 and 40
        then p_source
      else 'landing'
    end
  )
  on conflict (email_normalized) do nothing
  returning id into inserted_id;

  if inserted_id is null then
    return 'exists';
  end if;

  return 'created';
end;
$$;

revoke all on function public.join_waitlist(text, text) from public, anon, authenticated;
grant execute on function public.join_waitlist(text, text) to anon;
