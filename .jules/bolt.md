## 2024-05-22 - [Bundle Size Optimization via Code Splitting]
**Learning:** The application bundle size exceeded the 500kB threshold (538.42 kB) primarily due to the inclusion of Recharts in the main bundle. Since Recharts is only used in the Dashboard, the entire library was being loaded even when viewing other tabs.
**Action:** Use `React.lazy` and `Suspense` to isolate heavy components and their dependencies into separate chunks. This reduced the initial bundle size by ~72% (from 538.42 kB to 151.87 kB).
