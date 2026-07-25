# Bolt's Performance Journal

This journal tracks critical, codebase-specific performance learnings.

## 2025-01-08 - Bundle Size Reduction via Code Splitting
**Learning:** Recharts in `Dashboard` contributes heavily to the main JS chunk, triggering Vite's 500kB warning (at ~538.42 kB). Code splitting the main route/tab components keeps the initial bundle size small (~151.87 kB) and improves initial page load speed.
**Action:** Use `React.lazy` and `Suspense` for heavier route or tab-level components (like those displaying Recharts).
