import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

// Run against a real Next/Workers server to prove SSR, not source strings.
const origin = process.env.TEST_ORIGIN || "http://127.0.0.1:4173";
test("SSR delivers semantic content and isolated assets before JavaScript", async () => {
  const response = await fetch(`${origin}/landing/`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.match(html, /<html[^>]*lang="ko"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<main\b/g) || []).length, 1);
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  for (const content of [
    "사장님은 가게에",
    "예약금 확인",
    "예약 손님에게",
    "사장님에게",
    "방문 전날",
    "소희 카카오톡",
    "카페·음식점",
    "피드백",
    "승인",
    "수신 동의",
  ])
    assert.ok(markup.includes(content), `SSR missing ${content}`);
  assert.doesNotMatch(html, /바이름|ByReum|sohee-pilot/i);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(id), `missing anchor ${id}`);
  const urls = [
    ...new Set(
      [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map((m) => m[1]),
    ),
  ];
  // Page links point at public root URLs or the separately deployed app.
  const publicLinks = new Set([
    "/",
    "/product",
    "/channels",
    "/industries",
    "/privacy",
    "/terms",
    "/login",
    "/signup",
    "/data-deletion",
  ]);
  for (const url of urls) {
    if (publicLinks.has(url)) continue;
    assert.ok(url.startsWith("/landing/"), `asset escapes route: ${url}`);
    const asset = await fetch(origin + url);
    assert.equal(asset.status, 200, url);
  }
  assert.match(html, /rel="canonical" href="https:\/\/sohee.ai.kr\/"/);
  assert.doesNotMatch(html, /<form/);
  assert.doesNotMatch(html, /[₩]|[0-9][0-9,]*\s*(?:원|만원)/);
});
test("root route (/) delivers landing page with root canonical", async () => {
  const response = await fetch(`${origin}/`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.match(html, /<html[^>]*lang="ko"/);
  assert.match(html, /사장님은 가게에/);
  assert.match(html, /rel="canonical" href="https:\/\/sohee\.ai\.kr\/"/);
  assert.match(html, /href="\/login"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/terms"/);
  assert.match(html, /href="\/data-deletion"/);
});
test("query-string visits (utm, fbclid) still get the new landing", async () => {
  for (const query of ["?utm_source=meta", "?fbclid=abc&x=1"]) {
    const html = await (await fetch(`${origin}/${query}`)).text();
    assert.match(html, /사장님은 가게에/, query);
    assert.match(html, /rel="canonical" href="https:\/\/sohee\.ai\.kr\/"/);
  }
});
test("former marketing pages are served as new pages at their original URLs", async () => {
  const expected = {
    "/product": /일곱 장면/,
    "/channels": /연결 수준|검증 상태/,
    "/industries": /업종/,
    "/industries/beauty": /미용/,
    "/industries/local-service": /생활 서비스/,
    "/privacy": /Instagram·Threads/,
    "/terms": /이용약관/,
  };
  for (const [path, pattern] of Object.entries(expected)) {
    for (const suffix of ["", "?utm_source=meta"]) {
      const response = await fetch(`${origin}${path}${suffix}`);
      assert.equal(response.status, 200, path + suffix);
      const html = await response.text();
      assert.match(html, pattern, path);
      assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} h1`);
      assert.ok(
        html.includes(`rel="canonical" href="https://sohee.ai.kr${path}"`),
        `${path} canonical`,
      );
      assert.doesNotMatch(html, /MVP 안내 초안|운영 전 확인 안내/);
    }
  }
  assert.equal((await fetch(`${origin}/industries/unknown`)).status, 404);
});
test("legacy URLs redirect into the closest section of the new site", async () => {
  const expected = {
    "/pricing": "/#partnership",
    "/demo": "/#demo",
    "/diagnosis": "/#demo",
    "/refund": "/terms#payment",
    "/payment-info": "/terms#payment",
    "/business-info": "/privacy#contact",
  };
  for (const [from, to] of Object.entries(expected)) {
    const response = await fetch(origin + from, { redirect: "manual" });
    assert.equal(response.status, 301, from);
    assert.equal(new URL(response.headers.get("location")).pathname + new URL(response.headers.get("location")).hash, to.replace("/#", "/#"), from);
  }
});
test("privacy policy and data deletion info satisfy Meta review disclosures", async () => {
  const html = await (await fetch(`${origin}/privacy`)).text();
  const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const needle of [
    "instagram_business_basic",
    "instagram_business_content_publish",
    "threads_basic",
    "threads_content_publish",
    "AES-GCM-256",
    "/data-deletion",
    "support@sohee.ai.kr",
  ])
    assert.ok(html.includes(needle) || text.includes(needle), `privacy missing ${needle}`);
  assert.match(text, /인공지능 모델 학습에 사용하지 않습니다/);
});
test("unknown routes return 404 without exposing removed client assets", async () => {
  assert.equal((await fetch(`${origin}/landing/missing-page/`)).status, 404);
  for (const file of [
    "sohee-pilot-content.webp",
    "sohee-pilot-publishing.webp",
  ])
    await assert.rejects(
      stat(new URL(`../public/images/${file}`, import.meta.url)),
      { code: "ENOENT" },
    );
});
test("landing uses request-time server rendering", async () => {
  const manifest = JSON.parse(
    await readFile(
      new URL("../.next/prerender-manifest.json", import.meta.url),
      "utf8",
    ),
  );
  assert.ok(!manifest.routes["/"], "landing must not be prerendered");
});
