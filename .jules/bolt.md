# Bolt Performance Journal

## 2025-05-18 - Heavy Charting Library Code Splitting Impact
**Learning:** Recharts accounts for ~380 kB (~70%) of the minified client bundle. In Vite applications that import Recharts directly into top-level views, Vite warns that chunks exceed 500 kB. Implementing code splitting with `React.lazy` on views that depend on charting libraries isolates heavy dependencies and decreases initial bundle transfer size by ~72%.
**Action:** When working on dashboards or charting views, split chart components into asynchronous chunks and supply brand-consistent Suspense fallbacks.
