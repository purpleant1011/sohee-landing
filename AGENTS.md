# Sohee landing project context

## Product and audience

Korean-speaking small-business owners who cannot keep up with marketing while serving customers. Sohee is an AI marketing employee on a monthly subscription. Explain problem → connected work → expected benefit. Owner approval, accurate booking/deposit states, and verified outcomes remain explicit.

Primary CTA: choose an industry, explore Sohee's work, download an illustrative work brief. Do not create signup, login, payment, real messaging, fabricated proof, or named customer exposure. Never promise guaranteed revenue. No prices without explicit approval.

## Stack and boundaries

Next.js App Router, React, TypeScript, current Tailwind CSS 4, official shadcn/ui registry components customized to the brand. Server-render the landing; use client components only for interaction. Keep sections in components/landing and shared primitives in components/ui.

Deploy via OpenNext to the existing sohee-landing Worker only. Preserve /landing and /landing/\* routes and Next basePath. Never change real-sohee, DNS, root routes, or custom domains. Figma and Vercel are not required.

## Design and quality

Read PRODUCT.md and DESIGN.md. Cream/plum identity and original Sohee character are fixed. Full-body character artwork must use SoheeCharacter with object-fit: contain, no masks, no clipping, no border-radius. Verify actual rendered characters at mobile and desktop sizes, not merely HTTP image responses.

Use semantic headings, meaningful alt text, appropriate buttons versus navigation anchors, focus visibility, Korean accessible labels, keyboard operation, and reduced motion. Keep the same primary CTA promise across header, hero and closing.

## Workflow

Work solo. Read only relevant files. Make a concrete plan, implement fully, run one batched review and correction pass. Use Ego Lite for actual browser checks. Do not use built-in Appshot or SkyComputerUseService. Follow safe-appshot rules for desktop capture.

Stop preview processes before rebuilding Worker assets. Run npm run check, npm run build:worker, start npm run preview, then TEST_ORIGIN=http://127.0.0.1:4174 npm test. Verify mobile/desktop, character visibility, CTA, tabs, menu, FAQ, download, console, and accessibility. Record evidence. Deploy only when authorized; compare original root/pricing/login responses and original Cloudflare metadata. Commit/push and update the existing PR when requested.
