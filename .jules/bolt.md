## 2025-05-15 - Initial Bundle Size Optimization
**Learning:** The application had a single large JS bundle (~538 kB) due to heavy dependencies like Recharts being loaded upfront. Vite warns when chunks exceed 500 kB.
**Action:** Implementing code splitting with `React.lazy` and `Suspense` for main route/tab components reduced the initial bundle size by ~72% (to 151 kB), effectively moving heavy components into separate chunks.
