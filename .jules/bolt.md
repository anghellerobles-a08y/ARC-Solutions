# Bolt's Performance Journal

This journal tracks critical codebase-specific performance findings and patterns.

## 2024-08-09 - Initial Bundle Size Optimization
**Learning:** In a Recharts-heavy React application, components using charting libraries can bloat the main chunk size significantly, triggering Vite's 500kB warning (producing a 538.42 kB chunk). Combining code-splitting via React.lazy with memoization of statistics computations (O(N) useMemo consolidations) and components prevents parent-triggered re-renders and reduces the initial loading cost drastically.
**Action:** Always code-split Recharts-heavy dashboards into separate asynchronous chunks, load them with a brand-consistent loading indicator inside a Suspense block, and memoize statistics reduction logic to prevent redundant execution.
