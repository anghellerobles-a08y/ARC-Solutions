# Bolt's Performance Journal
## 2026-07-10 - Code Splitting & Memoization
**Learning:** Implementing code splitting on heavy tab components (using Recharts) reduced the initial JS bundle from 538kB to 152kB (~72% reduction). Memoizing statistical reductions and filter logic prevents unnecessary CPU work during parent re-renders.
**Action:** Always identify heavy dependencies like Recharts and isolate them in lazy-loaded chunks when they aren't needed for the initial view. Use useMemo for O(N) operations in render.
