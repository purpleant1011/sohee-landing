import test from "node:test";
import assert from "node:assert/strict";
import { resolveDeviceRedirect } from "../device-redirect.js";

const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148";
const ANDROID = "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/126 Mobile Safari/537.36";
const MAC = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15";
const BOT = "Mozilla/5.0 (Linux; Android 6.0.1) Mobile Safari/537.36 (compatible; Googlebot/2.1)";

test("phones on the apex or www go to the same path on m.sohee.ai.kr", () => {
  assert.equal(resolveDeviceRedirect("sohee.ai.kr", IPHONE, "/", ""), "https://m.sohee.ai.kr/");
  assert.equal(resolveDeviceRedirect("www.sohee.ai.kr", ANDROID, "/pricing", "?utm=a"), "https://m.sohee.ai.kr/pricing?utm=a");
});
test("PC browsers, m host, bots and unknown hosts are untouched", () => {
  assert.equal(resolveDeviceRedirect("sohee.ai.kr", MAC, "/", ""), null);
  assert.equal(resolveDeviceRedirect("m.sohee.ai.kr", IPHONE, "/", ""), null);
  assert.equal(resolveDeviceRedirect("sohee.ai.kr", BOT, "/", ""), null);
  assert.equal(resolveDeviceRedirect("localhost:4173", IPHONE, "/", ""), null);
});
test("landing assets and pages missing on m (industries) stay on this worker", () => {
  for (const p of ["/landing/_next/static/a.js", "/landing/images/x.webp", "/industries", "/industries/cafe", "/robots.txt"]) {
    assert.equal(resolveDeviceRedirect("sohee.ai.kr", IPHONE, p, ""), null, p);
  }
});
