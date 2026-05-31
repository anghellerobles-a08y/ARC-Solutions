## 2026-05-31 - [Bundle Size Optimization via Code Splitting]
**Learning:** Large libraries like Recharts can easily push the initial bundle size over the 500kB limit. Isolating these heavy components using React.lazy and Suspense significantly improves initial load performance.
**Action:** Always check bundle sizes after adding data visualization libraries and implement code splitting early for non-critical paths.

## 2026-05-31 - [Memoizing Data Reductions]
**Learning:** Functional components that perform multiple array reductions (sum, filter, average) on every render can cause performance degradation as the dataset grows.
**Action:** Use useMemo to consolidate multiple O(N) passes into a single pass and cache the results, especially when the component may be re-rendered by unrelated parent state changes.
