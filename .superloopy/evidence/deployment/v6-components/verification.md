# v6 production verification

Live: https://sohee.ai.kr/landing/
Worker: sohee-landing
Version: bd241c63-ee97-4036-9efc-a3b79484f025

- Request-time SSR HTML verified. 12 referenced assets respond and match local build where applicable.
- Existing root, pricing and login HTML are byte-identical to pre-migration baselines. SHA-256 values are in live-results.json.
- Existing real-sohee Worker metadata, original wildcard routes and custom-domain records unchanged. DNS untouched.
- Only sohee.ai.kr/landing and sohee.ai.kr/landing/* point to sohee-landing. Wrangler recreated those own route IDs without changing scope.
- Ego Lite verified live flower-shop booking interaction and complete closing character. browser.json and live-character.png.
- Rollback target for the previous landing: be77b6b7-30eb-48f4-a625-84474e06de7b. Never redeploy real-sohee for this landing.
