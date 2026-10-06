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
  for (const url of urls) {
    assert.ok(url.startsWith("/landing/"), `asset escapes route: ${url}`);
    const asset = await fetch(origin + url);
    assert.equal(asset.status, 200, url);
  }
  assert.match(html, /rel="canonical" href="https:\/\/sohee.ai.kr\/landing\/"/);
  assert.doesNotMatch(html, /href="\/signup|<form/);
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
  assert.match(html, /href="https:\/\/sohee\.ai\.kr\/login"/);
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
