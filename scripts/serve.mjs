import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const useDist = process.argv.includes("--dist");
const port = Number(process.env.PORT || 4173);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};
const server = http.createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }
  if (pathname === "/" || pathname === "/landing") {
    res.writeHead(302, { Location: "/landing/" });
    res.end();
    return;
  }
  if (!pathname.startsWith("/landing/")) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  let relative = pathname.slice("/landing/".length) || "index.html";
  const allowed =
    /^(index\.html|styles\.css|main\.js|favicon\.svg|src\/scenarios\.mjs|images\/[\w.-]+|fonts\/[\w.-]+)$/;
  if (!allowed.test(relative)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  let file;
  if (useDist) file = path.join(root, "dist/landing", relative);
  else
    file = path.join(
      root,
      /^(images\/|fonts\/|favicon\.svg)/.test(relative) ? "public" : "",
      relative,
    );
  try {
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type":
        contentTypes[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(
    `Sohee preview: http://127.0.0.1:${port}/landing/ (${useDist ? "production build" : "source"})`,
  ),
);
