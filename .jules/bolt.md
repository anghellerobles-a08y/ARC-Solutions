## 2024-06-03 - Vite Large Bundle Size Warning Due to Dynamic Imports Missing
**Learning:** Recharts is an extremely heavy charting library. If components utilizing Recharts (like Dashboard) are imported statically, they bloat the initial page load bundle. Vite emits a chunk size warning (exceeding 500kB limit) during the build.
**Action:** Use React.lazy and Suspense to isolate Recharts into its own dynamically loaded chunk. This defers downloading the charting library until the dashboard tab is displayed, reducing the initial bundle size below the warning threshold.
