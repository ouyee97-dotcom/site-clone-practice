# Site Clone Practice Rules

## Project Goal
- Recreate the structure, layout, visual hierarchy, and interaction patterns of reference websites for learning.
- Replace logos, copyrighted images, proprietary assets, and protected marketing copy with custom or neutral placeholder content.
- Focus on frontend structure, component composition, CSS layout, responsive behavior, and interaction states.

## Project Boundary
- Only use files in the current workspace unless the user explicitly provides external references.
- Do not use assumptions, code, prompts, or conventions from previous projects or previous threads.
- If context is missing, ask the user instead of guessing.
- Treat user-provided screenshots and notes as the primary visual references.

## Working Style
- Work in small phases. Do not rebuild the whole page in one pass.
- For implementation tasks, first provide a short plan and wait for user confirmation before editing files.
- For analysis tasks, do not modify files.
- If a screenshot or interaction detail is unclear, ask first instead of guessing.
- Let the user review each stable phase before moving to the next one.
- After editing, summarize:
  1. files changed
  2. what changed
  3. how to preview
  4. remaining gaps or assumptions

## Tech Constraints
- Use React + Vite + JavaScript.
- Prefer plain CSS or CSS Modules.
- Do not add new dependencies unless the user explicitly approves them.
- Keep code readable for a beginner.
- Prefer small, reusable components over large, tangled files.

## Git Rules
- Do not commit or push unless the user explicitly asks.
- You may suggest commit messages after a stable phase is finished.
- Do not rewrite git history.
- Do not run destructive git commands.
- Before suggesting a commit, ensure the current phase is stable and reviewable.

## Verification Commands
- Start dev server: `npm run dev`
- Build check: `npm run build`
- Lint check: `npm run lint`

If a command fails, explain the error before attempting further changes.

## Folder Intent
- `prompts/`: reusable Codex prompt templates for planning, analysis, implementation, review, and commit drafting.
- `references/screenshots/`: target screenshots used for visual reconstruction.
- `references/notes/`: notes about spacing, interactions, responsive behavior, and open questions.
- `src/components/`: reusable UI building blocks.
- `src/pages/`: page-level composition.
- `src/styles/`: tokens, global styles, layout rules, and future section styles.

## Reference File Naming
Use descriptive screenshot names, for example:
- `home-desktop-header.png`
- `home-desktop-hero.png`
- `home-desktop-section-01.png`
- `home-mobile-header.png`
- `home-mobile-menu-open.png`
- `button-hover-state.png`

## Preferred Phase Order
1. Collect screenshots and notes.
2. Analyze visual structure without editing files.
3. Clean starter files and create base layout.
4. Implement Header.
5. Implement Hero section.
6. Implement main content sections.
7. Add responsive behavior.
8. Tune spacing, typography, colors, and interactions.
9. Review accessibility and cleanup.

## Definition Of Done Per Phase
- The app still runs locally.
- The updated area matches the agreed scope for that phase.
- Obvious responsive issues are resolved for the affected area.
- Build and lint checks pass when applicable.
- Any remaining gaps or assumptions are stated clearly.
