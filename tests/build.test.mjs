import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));

test("production build keeps all internal links and assets under /landing", async () => {
  execFileSync(process.execPath, ["scripts/build.mjs"], { cwd: root });
  const html = await readFile(
    path.join(root, "dist/landing/index.html"),
    "utf8",
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique");
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(id), `missing anchor ${id}`);
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/landing\/[^"#]+)"/g))
    assert.ok((await stat(path.join(root, "dist", asset))).size > 0, asset);
  assert.doesNotMatch(html, /href="\/(login|signup|app|diagnosis)/);
  assert.match(html, /서비스 이해를 위한 예시/);
  assert.match(html, /예약금/);
  assert.match(html, /성과 리포트/);
});
