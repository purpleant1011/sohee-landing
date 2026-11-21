const PHONE_UA = /iPhone|iPod|Android.*Mobile/i;
const BOT_UA = /bot|crawler|spider|facebookexternalhit|slurp|bingpreview|kakaotalk-scrap|embedly|preview/i;
const PC_HOSTS = new Set(["sohee.ai.kr", "www.sohee.ai.kr"]);

// Pages that exist only on this landing worker (m.sohee.ai.kr has no /industries) and static files stay here.
function isOwnedByLanding(pathname) {
  if (pathname === "/landing" || pathname.startsWith("/landing/")) return true;
  if (pathname === "/industries" || pathname.startsWith("/industries/")) return true;
  return /\.[a-z0-9]{2,12}$/i.test(pathname);
}

// Phones that reach the PC hosts are sent to the same path on m.sohee.ai.kr (the mobile app).
export function resolveDeviceRedirect(rawHost, userAgent, pathname, search) {
  const host = (rawHost ?? "").toLowerCase().replace(/:\d+$/, "");
  if (!PC_HOSTS.has(host)) return null;
  const ua = userAgent ?? "";
  if (!PHONE_UA.test(ua) || BOT_UA.test(ua)) return null;
  if (isOwnedByLanding(pathname)) return null;
  return `https://m.sohee.ai.kr${pathname}${search}`;
}
