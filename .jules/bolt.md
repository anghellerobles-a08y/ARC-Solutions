## 2025-02-27 - Initial Bundle Optimization via Code Splitting & Recharts Isolation
**Learning:** Recharts is imported in `Dashboard.tsx` and adds ~375 kB to the main chunk when directly imported in `App.tsx`, triggering Vite's 500 kB chunk warning (538.42 kB total).
**Action:** Use `React.lazy` and `Suspense` for view components in `App.tsx` so heavy libraries like Recharts load asynchronously on demand, reducing initial bundle size to 151.87 kB (~71.8% reduction).
