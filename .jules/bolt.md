## 2025-05-18 - Heavy Visualization Library Bundle Isolation with Code Splitting

**Learning:** Including Recharts directly in the main view components (`Dashboard`) causes Vite to bundle the entire charting library into the initial entry script (`index.js`), inflating initial bundle size beyond 538 kB and triggering chunk size warnings.
**Action:** Always lazy-load top-level tab/route components that depend on heavy chart or mapping libraries (`React.lazy` + `Suspense`) to split vendors into async chunks and keep initial entry bundles under 150 kB.
