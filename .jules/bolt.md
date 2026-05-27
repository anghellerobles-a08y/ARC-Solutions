## 2025-05-15 - Code Splitting for Heavy Charting
**Learning:** Initial bundle size was ~538kB due to the `recharts` library being bundled in the main chunk. This exceeds the 500kB warning threshold and slows down initial load.
**Action:** Use `React.lazy` and `Suspense` to isolate the `Dashboard` component (which uses `recharts`) into a separate chunk. This reduced the initial JS bundle size to ~164kB (~70% reduction).

## 2025-05-15 - Memoizing Statistical Reductions
**Learning:** Components like `Dashboard` and `ClientesTable` perform array operations (reduce, filter) on every render. While fast for small mocks, these become bottlenecks as data grows.
**Action:** Consolidate statistical calculations into a single `useMemo` block in `Dashboard.tsx` and memoize filtering logic in `ClientesTable.tsx`.
