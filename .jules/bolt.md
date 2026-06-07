## 2025-05-14 - Code Splitting heavy dependencies
**Learning:** Recharts accounts for ~70% of the initial bundle size (approx 375kB). Moving the Dashboard component to a lazy-loaded chunk reduces the main bundle by over 70%, significantly improving initial load time.
**Action:** Always lazy-load components that import heavy third-party libraries like Recharts or large data grids.
