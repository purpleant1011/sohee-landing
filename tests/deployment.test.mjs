import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("production routes are restricted to the landing page and its assets", async () => {
  const source = await readFile(
    new URL("../wrangler.jsonc", import.meta.url),
    "utf8",
  );
  const config = JSON.parse(
    source.replace(/^\s*\/\/.*$/gm, "").replace(/,\s*([}\]])/g, "$1"),
  );
  assert.equal(config.name, "sohee-landing");
  const patterns = config.routes.map((route) => route.pattern);
  for (const host of ["sohee.ai.kr", "www.sohee.ai.kr"]) {
    // Query-string visits (utm, fbclid) match the root route automatically (Cloudflare routes ignore query strings).
    for (const suffix of [
      "",
      "/",
      "/product*",
      "/channels*",
      "/industries*",
      "/privacy*",
      "/terms*",
      "/pricing*",
      "/demo*",
      "/diagnosis*",
      "/refund*",
      "/payment-info*",
      "/business-info*",
      "/landing",
      "/landing/*",
    ]) {
      assert.ok(patterns.includes(host + suffix), `missing route ${host}${suffix}`);
    }
  }
  // The authenticated app, API and OAuth callbacks stay with real-sohee.
  for (const protectedPrefix of ["/app", "/api", "/login", "/signup", "/admin", "/auth", "/data-deletion", "/start"]) {
    assert.ok(
      patterns.every((pattern) => !pattern.includes(`sohee.ai.kr${protectedPrefix}`)),
      `${protectedPrefix} must not be routed to the landing worker`,
    );
  }
  assert.ok(config.routes.every((route) => !route.custom_domain));
  assert.equal(config.main, "worker-entry.js");
  assert.ok(config.compatibility_flags.includes("nodejs_compat"));
  assert.equal(config.assets.directory, ".open-next/assets");
});
