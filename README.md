# Rehab Tracker

Rehab Tracker is a Next.js app designed to help patients and clinicians follow rehabilitation plans and keep progress visible. The current build ships with a simple landing page and the groundwork for integrating real data and workflow-specific modules.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- TypeScript

## Getting Started
1. Install dependencies: `npm install`
2. Create `.env.local` and define any required secrets (for example, `DATABASE_URL` for the Neon/PostgreSQL instance)
3. Run the dev server: `npm run dev`
4. Visit `http://localhost:3000`

## Available Scripts
- `npm run dev` — start the Next.js development server
- `npm run build` — create an optimized production build
- `npm run start` — run the compiled app
- `npm run lint` — lint the codebase with ESLint

## Project Structure
- `app/` — App Router entry point, global styles, and home page
- `public/` — Static assets (add the logo referenced in `app/page.tsx` under `public/images/`)
- `next.config.ts` & `tsconfig.json` — framework and TypeScript config
- `eslint.config.mjs` & `postcss.config.mjs` — linting and styling setup

## Next Steps
- Replace the placeholder landing view with real rehabilitation dashboards and workflows
- Connect the UI to the database/API defined in `.env.local`
- Add testing and monitoring around key user journeys

Keep iterating and keep the README honest—update it as features land.
