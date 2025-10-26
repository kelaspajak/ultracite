## Commit & Pull Request Guidelines

- Commits: Prefer Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, `test:`). Keep messages concise and scoped.
- Documentation: prefix doc-only commits with `docs:` and mention affected sections.
- PRs: Include a clear summary, linked issues, and screenshots/GIFs for UI changes. Note data/script updates and whether snapshots changed.
- Reference issues in commit messages or PR descriptions using keywords like `Closes #123` when applicable.
- CI hygiene: run `npx ultracite fix` locally; ensure data processed if benchmarks changed.

## How to Add Features Safely (for agents)

- create new branch
Compatibility: ensure Next 16 + React 19 compatibility. Do not reintroduce deprecated APIs.
- Tests: If adding logic-heavy code and tests exist nearby, mirror local patterns. Don’t add test frameworks if none present.

## Current Implementation Notes
- Design: clean, clear like vercel.com, geist, geist-mono font. Global utilities in `app/globals.css` (e.g., `.card`, `.btn`, `.badge`, `.section-title`).
- Images:
- Static assets: place under `public/images/...` and reference with `/images/...`.
- Remote images: unsplash and baca.diskusipajak.com is allowed via `next.config.mjs` `images.remotePatterns`.
- docs use fumadocs package `pnpm add fumadocs-ui fumadocs-core`

## Tech Stack
- Framework: Next.js 16 (App Router)
- Runtime: React 19
- Styling: Tailwind CSS; custom utility classes in `app/globals.css`
- shadcn-ui
- docs: fumadocs 