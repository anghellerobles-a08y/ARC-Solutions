# Bolt's Performance Journal

## 2024-11-23 - Recharts Bundle Size Overhead
**Learning:** Recharts is a heavy charting library imported synchronously in Dashboard, causing the initial JS bundle size to exceed 538 kB (above the Vite warning threshold of 500 kB).
**Action:** Use React.lazy and Suspense to isolate heavy tab components (specifically Dashboard) into separate lazy-loaded chunks to keep the initial bundle size below the 500kB warning threshold.
