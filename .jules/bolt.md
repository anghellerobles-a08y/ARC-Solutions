## 2025-02-13 - Code Splitting Recharts-dependent Dashboard

**Learning:** Importing Recharts directly at the top level in Dashboard.tsx inflates the initial bundle size past Vite's 500 kB threshold (538.42 kB). Since Recharts is only required on the Dashboard view, statically importing Dashboard in App.tsx causes all visitors to download Recharts on initial load.
**Action:** Always use `React.lazy` and `Suspense` in route/tab switcher components for heavy views that import large charting libraries like Recharts.
