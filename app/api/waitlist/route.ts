import { isValidEmail, normalizeEmail } from "@/lib/waitlist";

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 2048;

function json(body: object, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function readLimitedBody(request: Request): Promise<string | null> {
  const declaredLength = request.headers.get("content-length");
  if (declaredLength !== null && Number(declaredLength) > MAX_BODY_BYTES) {
    return null;
  }

  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export async function POST(request: Request) {
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get("content-type") ?? "")) {
    return json({ ok: false, code: "invalid" }, 415);
  }

  let payload: unknown;
  try {
    const body = await readLimitedBody(request);
    if (body === null) return json({ ok: false, code: "invalid" }, 413);
    payload = JSON.parse(body);
  } catch {
    return json({ ok: false, code: "invalid" }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return json({ ok: false, code: "invalid" }, 400);
  }

  const { email, website } = payload as Record<string, unknown>;
  if (typeof website === "string" && website.length > 0) {
    return json({ ok: true });
  }
  if (website !== undefined && typeof website !== "string") {
    return json({ ok: false, code: "invalid" }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ ok: false, code: "invalid" }, 400);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    return json({ ok: false, code: "unavailable" }, 502);
  }

  try {
    const response = await fetch(
      `${url.replace(/\/+$/, "")}/rest/v1/rpc/join_waitlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          p_email: normalizeEmail(email),
          p_source: "landing",
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      return json({ ok: false, code: "unavailable" }, 502);
    }

    const result: unknown = await response.json();
    if (result === "created" || result === "exists") {
      return json({ ok: true });
    }
    if (result === "invalid") {
      return json({ ok: false, code: "invalid" }, 400);
    }
    return json({ ok: false, code: "unavailable" }, 502);
  } catch {
    return json({ ok: false, code: "unavailable" }, 502);
  }
}
