## 2025-05-22 - Code Splitting for Heavy Dependencies
**Learning:** Including charting libraries like Recharts in the main bundle can cause the initial chunk to exceed the 500kB warning threshold. Implementing code splitting at the route or tab level isolates these heavy dependencies.
**Action:** Use `React.lazy` and `Suspense` to isolate components that pull in large third-party libraries, keeping the initial bundle lean and fast.

## 2025-05-22 - Memoizing Data Transformations
**Learning:** Redundant calculations (reductions, filters) on data arrays during every render cycle can lead to performance degradation as data grows.
**Action:** Wrap expensive statistical reductions and filter logic in `useMemo` to ensure they only execute when the source data changes.
