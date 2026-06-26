## 2025-05-14 - Code Splitting for Main Tabs
**Learning:** Implementing `React.lazy` and `Suspense` for top-level tab components significantly reduced the initial bundle size from 538.42 kB to 151.87 kB (~72% reduction). This optimization is particularly effective when components import heavy libraries like Recharts.
**Action:** Always check the initial bundle size using `npm run build` and consider code splitting for large route-level or tab-level components.
