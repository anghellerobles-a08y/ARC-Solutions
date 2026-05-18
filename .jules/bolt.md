## 2025-05-15 - [Initial Bundle Size Reduction]
**Learning:** Large React applications with heavy visualization libraries like Recharts can significantly bloat the initial bundle size, leading to slow "First Meaningful Paint". Using React.lazy for route-level or tab-level components can effectively split these heavy dependencies into separate chunks.
**Action:** Always check for large dependencies in the main bundle using `npm run build` and apply code splitting to heavy components that are not immediately visible.
