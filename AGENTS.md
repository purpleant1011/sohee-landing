# Sohee landing project context

## Product and audience

Korean-speaking small-business owners who cannot keep up with marketing while serving customers. Sohee is an AI marketing employee on a monthly subscription. Explain problem → connected work → expected benefit. Owner approval, accurate booking/deposit states, and verified outcomes remain explicit.

Primary CTA: choose an industry, explore Sohee's work, download an illustrative work brief. The landing only links to the existing app's /login and /signup (Meta app review starts from this site); it never implements signup, login, payment, real messaging, fabricated proof, or named customer exposure. Never promise guaranteed revenue. No prices without explicit approval.

## Stack and boundaries

Next.js App Router, React, TypeScript, current Tailwind CSS 4, official shadcn/ui registry components customized to the brand. Server-render the landing; use client components only for interaction. Keep sections in components/landing and shared primitives in components/ui.

Deploy via OpenNext to the existing sohee-landing Worker only. Preserve the Next basePath /landing. This Worker owns the public marketing/legal URLs (/, /product, /channels, /industries/*, /privacy, /terms and legacy /pricing etc. redirects) through zone routes in wrangler.jsonc, including query-string variants (`/?*`); worker-entry.js rewrites them onto /landing. Never route /app, /api, /login, /signup, /admin, /auth, /start or /data-deletion here and never change real-sohee, DNS or custom domains. Contact and legal facts live in lib/site.ts; operator identity (상호/대표자/사업자번호) must only be added once confirmed. Figma and Vercel are not required.

## Design and quality

Read PRODUCT.md and DESIGN.md. Cream/plum identity and original Sohee character are fixed. Full-body character artwork must use SoheeCharacter with object-fit: contain, no masks, no clipping, no border-radius. Verify actual rendered characters at mobile and desktop sizes, not merely HTTP image responses.

Use semantic headings, meaningful alt text, appropriate buttons versus navigation anchors, focus visibility, Korean accessible labels, keyboard operation, and reduced motion. Keep the same primary CTA promise across header, hero and closing.

## Workflow

Work solo. Read only relevant files. Make a concrete plan, implement fully, run one batched review and correction pass. Use Ego Lite for actual browser checks. Do not use built-in Appshot or SkyComputerUseService. Follow safe-appshot rules for desktop capture.

Stop preview processes before rebuilding Worker assets. Run npm run check, npm run build:worker, start npm run preview, then TEST_ORIGIN=http://127.0.0.1:4174 npm test. Verify mobile/desktop, character visibility, CTA, tabs, menu, FAQ, download, console, and accessibility. Record evidence. Deploy only when authorized; compare original root/pricing/login responses and original Cloudflare metadata. Commit/push and update the existing PR when requested.
