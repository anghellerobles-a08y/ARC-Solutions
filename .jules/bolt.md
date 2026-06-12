# Bolt's Performance Journal
## 2026-06-12 - Initial Bundle Size Reduction via Code Splitting
**Learning:** Implementing code splitting for the Dashboard component (which depends on Recharts) reduced the initial JavaScript bundle size from 538.42 kB to 164.15 kB (~69% reduction).
**Action:** Use React.lazy and Suspense for route-level or heavy tab components to keep the initial bundle small.
