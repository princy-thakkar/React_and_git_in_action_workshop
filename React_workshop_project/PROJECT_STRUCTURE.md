# Project Structure — React_workshop_project

This document gives a concise overview of the project's filesystem, purpose of important files, and common developer commands so you can quickly understand and navigate the codebase.

**Tree (top-level)**

- README.md: project README (this repo)
- package.json: npm scripts and dependencies
- vite.config.ts: Vite configuration (dev server, plugins)
- tsconfig.json / tsconfig.app.json / tsconfig.node.json: TypeScript configs
- eslint.config.js: ESLint configuration
- index.html: app host HTML used by Vite
- public/: static public files served as-is
- src/: application source code

**src/ (important files)**

- App.tsx: top-level React component
- main.tsx: app bootstrap and ReactDOM.render / createRoot
- index.css, App.css: global and component styles
- assets/: images and static assets imported by code

**package.json scripts**

- dev: runs the Vite dev server (hot reload) — `vite`
- build: compile TypeScript and build production bundle — `tsc -b && vite build`
- preview: locally preview the production build — `vite preview`
- lint: run ESLint across the project — `eslint .`

Use `npm run <script>` or `pnpm/ yarn` equivalents depending on your package manager.

How to get started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev` (open normally at http://localhost:5173)
3. Build for production: `npm run build`
4. Preview production build locally: `npm run preview`
5. Lint code: `npm run lint`

Key configuration notes

- TypeScript: project has multiple tsconfig files. `tsconfig.app.json` is typically used for the app build; `tsconfig.node.json` for Node tooling. `tsconfig.json` is the base config.
- Vite: `vite.config.ts` contains plugin setup (React plugin) and dev server settings.
- ESLint: rules and plugins are in `eslint.config.js`. Run `npm run lint` to check code style.

Where to add features

- New React components: create a folder under `src/` (for example `src/components/`) and export from an index file.
- Routes / pages: if you add routing, create a `src/pages/` folder.
- Styles: keep component styles near components and shared/global styles in `src/index.css` or `src/styles/`.
- Static assets: put non-processed assets in `public/` or import them from `src/assets/` to include in the bundle.

Troubleshooting

- If dev server fails, check the terminal for TypeScript errors; `npm run build` runs `tsc -b` first and will show issues.
- If imports fail, verify TypeScript paths in the `tsconfig` and ensure file extensions match (`.tsx` for components with JSX).

Further reading

- See the app entry: [React_workshop_project/index.html](React_workshop_project/index.html)
- See the main bootstrapper: [React_workshop_project/src/main.tsx](React_workshop_project/src/main.tsx)
- See the top-level component: [React_workshop_project/src/App.tsx](React_workshop_project/src/App.tsx)

If you want, I can: add a diagram, expand this into README sections, or extract a CONTRIBUTING guide.
