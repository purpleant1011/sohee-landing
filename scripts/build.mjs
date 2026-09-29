import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const out = path.join(root, "dist");
await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, "landing"), { recursive: true });
for (const name of ["index.html", "styles.css", "main.js", "src"]) {
  await cp(path.join(root, name), path.join(out, "landing", name), {
    recursive: true,
  });
}
await cp(path.join(root, "public"), path.join(out, "landing"), {
  recursive: true,
});
await writeFile(
  path.join(out, "index.html"),
  '<!doctype html><html lang="ko"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/landing/"><title>소희</title><a href="/landing/">소희 랜딩페이지로 이동</a></html>',
);
await writeFile(
  path.join(out, "404.html"),
  '<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>페이지를 찾을 수 없어요 — 소희</title><h1>페이지를 찾을 수 없어요.</h1><p><a href="/landing/">소희 소개로 돌아가기</a></p></html>',
);
await writeFile(
  path.join(out, "_headers"),
  `/landing/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'\n/landing/images/*\n  Cache-Control: public, max-age=86400\n/landing/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n`,
);
const html = await readFile(path.join(out, "landing/index.html"), "utf8");
for (const match of html.matchAll(/(?:src|href)="(\/landing\/[^"#]+)"/g)) {
  const file = path.join(out, match[1]);
  const data = await readFile(file);
  if (!data.length) throw new Error(`Empty asset: ${match[1]}`);
}
console.log(
  "Build complete: dist/landing — all HTML assets exist and are nonempty.",
);
