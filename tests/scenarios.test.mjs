import test from "node:test";
import assert from "node:assert/strict";
import {
  scenarios,
  steps,
  getScenario,
  createBrief,
} from "../src/scenarios.mjs";

test("each industry covers planning, conversation, booking/deposit and reporting", () => {
  assert.equal(steps.length, 4);
  for (const scenario of Object.values(scenarios)) {
    assert.equal(scenario.stages.length, steps.length);
    assert.match(scenario.stages[2].body, /예약금/);
    assert.match(scenario.stages[3].body, /확인|실제/);
    assert.ok(scenario.goal.length > 5);
  }
});
test("unknown industries safely fall back to the default", () => {
  assert.equal(getScenario("missing"), scenarios.beauty);
});
test("downloaded brief identifies examples and includes all steps without a sales guarantee", () => {
  const brief = createBrief("flower");
  assert.match(brief, /서비스 이해를 위한 예시/);
  assert.match(brief, /꽃/);
  for (const step of steps) assert.ok(brief.includes(step.title));
  assert.match(brief, /매출을 보장/);
});
