import assert from "node:assert/strict";
import test from "node:test";
import {
  isValidEmail,
  normalizeEmail,
} from "../lib/waitlist-validate.mjs";

test("이메일을 공백 제거 및 소문자로 정규화한다", () => {
  assert.equal(normalizeEmail("  Hello@Example.COM  "), "hello@example.com");
  assert.equal(isValidEmail("  Hello@Example.COM  "), true);
});

test("잘못된 이메일을 거부한다", () => {
  for (const value of [
    "",
    " ",
    "missing-at.example.com",
    "a@b",
    "a@@example.com",
    "a b@example.com",
    "a@example .com",
    null,
    42,
  ]) {
    assert.equal(isValidEmail(value), false, String(value));
  }
});

test("254자까지만 허용한다", () => {
  const email = `${"a".repeat(242)}@example.com`;
  assert.equal(email.length, 254);
  assert.equal(isValidEmail(email), true);
  assert.equal(isValidEmail(`x${email}`), false);
});
