# Next.js landing migration

1. Use actual Next.js 16 App Router with OpenNext Cloudflare; force dynamic SSR. Keep existing Worker name and exact two routes. All public assets and chunks live under /landing.
2. Replace long static page with a store-workspace composition: editorial employee introduction, concrete handoff diagram, interactive industry examples, connected booking/calendar/two-recipient reminder view, and store memory learning. Preserve character, product truth, owner approval and illustrative disclosures.
3. Tailwind 4 tokens and customized shadcn/ui primitives (Button, Tabs, Accordion, Sheet). Server page with bounded client islands. No fake signup/login.
4. Validate scenario behavior, deployment isolation, typecheck, actual next build and Workers preview, HTML without JS, assets and semantic landmarks. Browser check desktop/mobile, keyboard, sheet, tabs and FAQ.
5. Deploy only sohee-landing; compare original app and routes against baselines. Commit, push, update PR 1.

## Direction contract
THESIS: A marketing employee's work becomes visible from the owner's one request to a customer's visit.
OWN-WORLD: Cream, ink, muted plum, warm apricot and existing Sohee character; product canvases with clean rules, strong Korean typography and purposeful status marks.
STORY: Understand the handoff, explore one's industry, see booking/reminders, learn what to prepare. No fabricated proof or guaranteed sales.
FIRST VIEWPORT: Large two-line owner promise at left; real character illustration at right with an attached daily work note; next section transitions directly to the interactive workbench.
FORM: An employee's shared workbench, within the confirmed Sohee identity. Code-led framework redesign under explicit autonomous authorization.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
