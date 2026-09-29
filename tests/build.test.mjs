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

test("landing explains responsibility levels without prices or simulated signup", async () => {
  const html = await readFile(path.join(root, "index.html"), "utf8");
  const plans = html.slice(
    html.indexOf('id="plans"'),
    html.indexOf('id="faq"'),
  );
  for (const tier of ["시작", "성장", "운영"]) assert.ok(plans.includes(tier));
  assert.doesNotMatch(html, /[₩$]|[0-9][0-9,]*\s*(?:원|만원)/);
  assert.doesNotMatch(html, /<form|type="submit"/);
  assert.match(html, /입금 확인 대기/);
  assert.match(html.replace(/\s+/g, " "), /실제 고객 대화나 성과가 아니/);
  assert.match(html, /sohee-mission-map.webp/);
});
