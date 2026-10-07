import openNextWorker from "./.open-next/worker.js";

const APEX = "sohee.ai.kr";

// Public marketing/legal pages are served at the domain root and rendered by
// the Next app under its /landing basePath.
const ROOT_PAGES = [
  /^\/$/,
  /^\/product$/,
  /^\/channels$/,
  /^\/privacy$/,
  /^\/terms$/,
  /^\/industries$/,
  /^\/industries\/[^/]+$/,
];

// Legacy marketing URLs map onto the closest section of the new site.
const LEGACY_REDIRECTS = new Map([
  ["/pricing", "/#partnership"],
  ["/demo", "/#demo"],
  ["/diagnosis", "/#demo"],
  ["/refund", "/terms#payment"],
  ["/payment-info", "/terms#payment"],
  ["/business-info", "/privacy#contact"],
]);

const stripTrailingSlash = (path) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // www -> apex, keeping path and query (utm/fbclid etc.).
    if (url.hostname === `www.${APEX}`) {
      return Response.redirect(`https://${APEX}${url.pathname}${url.search}`, 301);
    }

    if (url.pathname === "/landing" || url.pathname.startsWith("/landing/")) {
      return openNextWorker.fetch(request, env, ctx);
    }

    const path = stripTrailingSlash(url.pathname);

    const legacy = LEGACY_REDIRECTS.get(path);
    if (legacy) {
      const hashAt = legacy.indexOf("#");
      const legacyPath = hashAt === -1 ? legacy : legacy.slice(0, hashAt);
      const hash = hashAt === -1 ? "" : legacy.slice(hashAt);
      return Response.redirect(
        `https://${APEX}${legacyPath}${url.search}${hash}`,
        301,
      );
    }

    if (ROOT_PAGES.some((pattern) => pattern.test(path))) {
      const target = new URL(
        `/landing${path === "/" ? "/" : `${path}/`}`,
        request.url,
      );
      target.search = url.search;
      const response = await openNextWorker.fetch(
        new Request(target.toString(), request),
        env,
        ctx,
      );
      // Next appends a trailing slash to canonical/og:url; the public URL has none.
      if (
        path !== "/" &&
        response.status === 200 &&
        response.headers.get("content-type")?.includes("text/html")
      ) {
        const html = (await response.text()).replaceAll(
          `https://${APEX}${path}/"`,
          `https://${APEX}${path}"`,
        );
        return new Response(html, {
          status: response.status,
          headers: response.headers,
        });
      }
      return response;
    }

    // Anything else is not owned by this Worker (assets live under /landing/*).
    return openNextWorker.fetch(request, env, ctx);
  },
};
