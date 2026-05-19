# Bolt's Performance Journal - BMSC Mora Gestión

## 2025-05-23 - Bundle Size Optimization with Code Splitting
**Learning:** The initial bundle size was over 500kB (specifically 538.42 kB), primarily due to the heavy `recharts` library being included in the main chunk. Even for a small application, including large visualization libraries in the initial load can exceed performance budgets.
**Action:** Use `React.lazy` and `Suspense` to isolate heavy components (like those using Recharts) into separate chunks. This reduced the initial bundle size from 538.42 kB to 151.65 kB, a 71.8% reduction.

## 2025-05-23 - Consolidating Array Iterations
**Learning:** Multiple separate `.reduce` and `.filter` calls on the same dataset in a component's render body can be inefficient as the dataset grows. While not a bottleneck for small mock data, it sets a bad precedent.
**Action:** Consolidate related data transformations and statistics calculations into a single O(N) pass within `useMemo` for optimal performance and cleaner logic.

## 2025-05-23 - Memoization of Filtered Lists
**Learning:** React components re-render for many reasons (e.g., state changes in parent). Complex operations like filtering a list should be memoized to avoid unnecessary work during these re-renders.
**Action:** Wrap filtering logic in `useMemo` to ensure it only executes when the source data or the search term changes.
