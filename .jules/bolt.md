## 2025-10-09 - Route & Component Code Splitting for Heavy Charting Libraries
**Learning:** Recharts is a heavy dependency that bloats initial bundle sizes (over 500kB). Code splitting tab views (`Dashboard`, `ClientesTable`, `Reportes`) using `React.lazy` and `Suspense` defers loading Recharts until needed, reducing the initial JavaScript bundle from 538.42 kB to 151.87 kB (~71.8% reduction).
**Action:** Always lazy load components that import heavy chart libraries or visualization frameworks when they are not strictly needed for the default initial view or when tab switching is used.
