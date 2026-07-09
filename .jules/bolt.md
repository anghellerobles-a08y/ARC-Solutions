## 2025-01-24 - Code Splitting & Memoization
**Learning:** Implementing `React.lazy` for tab-based components significantly reduced the initial bundle size from 538kB to 152kB (~72% reduction). Memoizing statistical reductions and list filtering prevents UI stuttering during parent-triggered re-renders.
**Action:** Always check bundle size with `npm run build` to identify code-splitting opportunities, and memoize expensive data transformations in data-heavy views.
