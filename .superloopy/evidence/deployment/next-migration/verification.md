# Next.js production deployment — 2026-09-29

Live: https://sohee.ai.kr/landing/
Worker: sohee-landing
Version: be77b6b7-30eb-48f4-a625-84474e06de7b
Runtime: Next.js App Router SSR through OpenNext Cloudflare.

## Production checks
- `/landing` returns 308 to `/landing/`; final page returns 200 and includes meaningful server-rendered content.
- 11 HTML-referenced assets all respond; each available local build counterpart matches byte-for-byte. Framework scripts/CSS stay under `/landing/_next/`.
- Original `/`, `/pricing`, `/login` responses are byte-identical before and after this migration. SHA-256 recorded in live-results.json.
- Original real-sohee Worker metadata, custom-domain records, and both original wildcard route objects are identical to the original deployment baseline.
- Only the two landing routes belong to sohee-landing. Wrangler replaced their route IDs during deployment; patterns and owning Worker are unchanged. No root route, custom-domain, or DNS change.
- Self-reference service binding points only to sohee-landing.
- Ego Lite opened the live page and exercised the flower-shop booking example. Live screenshot: live.png.

## Original app routes preserved
- www.sohee.ai.kr/* → real-sohee
- sohee.ai.kr/* → real-sohee

## Landing-only routes
- sohee.ai.kr/landing → sohee-landing
- sohee.ai.kr/landing/* → sohee-landing

## Rollback
The previous static landing Worker version was d9a78f53-723b-41c0-8f9f-0d4a5ebacd83. If needed, roll back only the sohee-landing Worker; never redeploy real-sohee for this landing.
