## 2025-05-15 - Code splitting reduces initial bundle size by 70%
**Learning:** The `recharts` library is quite heavy and was bloating the initial bundle. By using `React.lazy` to isolate components that depend on it, we can significantly reduce the initial JavaScript payload.
**Action:** Always consider code splitting for routes or heavy components that are not immediately visible on initial load.

## 2025-05-15 - Memoization for data-heavy components
**Learning:** Components like `Dashboard` and `ClientesTable` perform reductions and filters on data props. While the current mock data is small, these operations can become expensive as the data grows. Memoizing them prevents unnecessary overhead during parent-triggered re-renders.
**Action:** Use `useMemo` for any statistical reductions or filtering logic in components that receive large data arrays.
