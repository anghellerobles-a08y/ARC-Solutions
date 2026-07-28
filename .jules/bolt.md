## 2024-11-20 - Code Splitting and Memoization for Mora BMSC
**Learning:** React 18 bundles Recharts and standard views in a single chunk by default, which can trigger a chunk-size warning (>500kB) and delay the Initial Page Load. Splitting components with dynamic imports reduces initial chunk size significantly. Memoizing statistical reductions and list filters prevents unnecessary layout shifts and re-renders on tab changes or search typing.
**Action:** Use React.lazy, Suspense, and useMemo to optimize heavy components and filtering logic to improve initial and runtime performance.
