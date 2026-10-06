import openNextWorker from "./.open-next/worker.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Root route ('/' or empty) rewrite to '/landing/'
    if (url.pathname === "/" || url.pathname === "") {
      const targetUrl = new URL("/landing/", request.url);
      targetUrl.search = url.search;
      const rewrittenRequest = new Request(targetUrl.toString(), request);
      const response = await openNextWorker.fetch(rewrittenRequest, env, ctx);

      // Replace canonical URL from /landing/ to / for the root response
      if (response && response.status === 200 && response.headers.get("content-type")?.includes("text/html")) {
        const bodyText = await response.text();
        const updatedBody = bodyText.replace(
          /rel="canonical" href="https:\/\/sohee\.ai\.kr\/landing\/"/,
          'rel="canonical" href="https://sohee.ai.kr/"'
        );
        const headers = new Headers(response.headers);
        return new Response(updatedBody, {
          status: 200,
          headers,
        });
      }

      return response;
    }

    // 2. Normal requests (/landing, /landing/*, assets, etc.)
    return openNextWorker.fetch(request, env, ctx);
  },
};
