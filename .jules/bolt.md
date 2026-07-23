# Bolt's Journal

## 2024-07-23 - Initial Setup
**Learning:** Verified standard build pipeline and bundle configuration. Discovered bundle size exceeds 500kB warning threshold due to single bundle containing heavy charting library (Recharts).
**Action:** Implement code splitting via `React.lazy` and `Suspense` for heavy tab components (such as `Dashboard` and `Reportes`) to isolate large dependencies.
