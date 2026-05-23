# Bolt's Journal - Critical Learnings

## 2025-05-15 - [Initial Bundle Size Optimization]
**Learning:** The application had a monolithic bundle > 500kB. Heavy libraries like Recharts in the Dashboard were contributing significantly to the initial load time even when not on the dashboard.
**Action:** Use React.lazy and Suspense to isolate heavy components into separate chunks. This reduced the initial bundle size from ~538kB to ~152kB (~71% reduction).
