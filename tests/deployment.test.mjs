import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('production routes are restricted to the landing page and its assets', async () => {
  const source = await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8');
  const config = JSON.parse(source.replace(/^\s*\/\/.*$/gm, ''));
  assert.equal(config.name, 'sohee-landing');
  assert.deepEqual(config.routes.map(route => route.pattern), ['sohee.ai.kr/landing', 'sohee.ai.kr/landing/*']);
  assert.ok(config.routes.every(route => !route.custom_domain));
  assert.equal(config.assets.directory, './dist');
});
