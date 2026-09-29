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

test("pilot evidence distinguishes verified execution from future outcomes", async () => {
  const html = (await readFile(path.join(root, "index.html"), "utf8")).replace(
    /\s+/g,
    " ",
  );
  assert.match(html, /사장님 승인 후/);
  assert.match(
    html,
    /실제 문의·예약 연결과 마케팅 시간 절감은 다음 현장 검증 과제/,
  );
  assert.match(
    html,
    /현재 채널의 실시간 상태나 고객 유입 성과를 뜻하지 않습니다/,
  );
  for (const file of [
    "sohee-pilot-content.webp",
    "sohee-pilot-publishing.webp",
  ]) {
    assert.ok(html.includes(file));
    assert.ok((await stat(path.join(root, "public/images", file))).size > 0);
  }
  assert.doesNotMatch(html, /파일럿.*?계약금|무상 파일럿|[0-9]+%.*?매출/);
});
