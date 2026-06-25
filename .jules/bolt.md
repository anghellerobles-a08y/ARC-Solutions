## 2026-06-25 - [Implement code splitting and memoization]
**Learning:** Implementing code splitting in App.tsx reduced the initial JavaScript bundle size from 538.42 kB to 151.88 kB (~72% reduction) by isolating the Recharts-dependent Dashboard component and other tab components into separate lazy-loaded chunks.
**Action:** Always check bundle size with `npm run build` and prioritize lazy loading for components with heavy dependencies like Recharts. Use useMemo for statistical reductions and filtering logic to minimize main-thread work during re-renders.
