# Cloudflare landing-only deployment — 2026-09-29

## Deployment
- Worker: `sohee-landing` (new, separate from `real-sohee`)
- Version: `d9a78f53-723b-41c0-8f9f-0d4a5ebacd83`
- URL: https://sohee.ai.kr/landing → HTTP 307 /landing/ → HTTP 200
- Deployed HTML exactly matches `dist/landing/index.html`.
- Route additions only: `sohee.ai.kr/landing`, `sohee.ai.kr/landing/*`.
- Existing `sohee.ai.kr/*` and `www.sohee.ai.kr/*` route records unchanged.
- Existing `real-sohee` script metadata unchanged (full API record comparison).
- Existing custom-domain records unchanged (full API record comparison).
- No DNS mutation or existing Worker deployment performed.

## Existing site comparison
Response HTML before/after deployment is byte-identical for:
- `/`: SHA256 b26949f542a14b2f632e252607e969a56e202f25e12e1970dbe7291472f54d1c; HTTP 200 after deployment.
- `/pricing`: a77f0f2e1877d0f66a09c58127a61ccdaedef373922f491c1254537ccacbd7fa
- `/login`: 1454c4b03d6c5f75af0bb4f0cb4ffb14150911d146b9e51cf89dfa96fb40eec1
`www` returned an empty redirect body in both curl captures; not treated as a rendered-page comparison. Domain/route identity is separately verified above.

API reads used Wrangler OAuth without emitting credentials. A Python public-page request received 403; repeated public comparison with the same curl client used for baseline succeeded. No security settings changed.

## Live browser and assets
Ego Lite TaskSpace 3, p1 navigated through the production URL. Live flower demo next-step, mobile menu/Escape, 390px layout, loaded project images and stylesheet checked. Result page kept open. Native built-in Appshot not used; scoped Ego screenshot saved as `live-landing.png`.
All referenced HTML assets plus scenario module compared byte-for-byte against local production build: `assets.json`.

## Checks
`npm run check`, `npm test` (7 passing), `wrangler deploy --dry-run` completed before deployment. Route regression test rejects broad/root/custom-domain assignments. No actual booking, deposit or Kakao notification executed.
