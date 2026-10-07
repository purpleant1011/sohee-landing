# Landing requirements and conversion flow

## Audience
Owner-operated beauty, food, class, craft, fitness and local-service businesses. Their constraint is serving customers while also planning promotions, writing, publishing, replying and keeping booking records.

## Problem → solution → expected effect
Problem: closing the store does not end the day's marketing work; scattered tasks leave the owner responsible for every handoff.
Solution: a monthly AI marketing employee learns store facts, prepares a promotion for approval, and connects content, conversation, booking, confirmation and reporting within supported integrations.
Expected effect: less repetitive preparation, clearer follow-up from customer interest to a visit, and more informed next promotions. These are product intentions, not guaranteed measured results.

## Primary conversion
Select the owner's industry → inspect relevant work stages → save the example plan. CTA explicitly says it opens examples; no unimplemented hiring form or signup claim. First and final CTAs carry the same promise, and the visitor is told that no signup is needed.

## Section sequence
1. Hero: after-hours marketing burden and Sohee employee identity.
2. Handoff and expected changes: owner sets criteria/approval, Sohee connects work; time, customer follow-up, and better-informed promotions.
3. Industry workbench: concrete interactive proof of fit and plan download.
4. Booking: conversation → verified deposit state → owner calendar → both recipients notified before a visit.
5. Learning: many industries, store-specific knowledge and clearer proposals.
6. Owner control: approval, escalation and accurate reporting.
7. Partnership scope without prices.
8. Questions and actual availability boundaries.
9. Closing: picture working with an employee, then choose work examples.

## Implementation checklist
- Next App Router / request-time SSR retained.
- Tailwind latest registry release checked: 4.3.3; installed version is current.
- Official shadcn 4.21.0 CLI added/overwrote Button, Tabs, Accordion, Sheet, Card, Badge, Separator. Registry's aggregate radix-ui replaces redundant direct Radix dependencies. Existing local cn helper reused.
- Each page section is now a separate server component in components/landing; app/page only composes the story.
- AGENTS.md + CLAUDE.md establish product, stack, design and execution context.
- Character cropping root cause: cover + fixed box + rounded clipping. SoheeCharacter uses original 926×1698 dimensions and contain/no-mask invariant.
- Verify SSR, metadata, links, images, keyboard, CTA, download, mobile and desktop. Actual browser regression checks must inspect computed object-fit and clipping, not just HTTP 200.
- Figma and Vercel explicitly excluded by user. GitHub and isolated Cloudflare deployment remain the delivery path.
