## 2025-02-18 - Code Splitting Recharts-dependent Dashboard Component
**Learning:** Recharts dependency adds ~375 kB minified JS to the initial bundle. Using React.lazy with Suspense in App.tsx isolates Recharts into a lazy chunk, dropping initial entry point size from 538.42 kB to 151.89 kB (~71.8% reduction) and eliminating Vite chunk size warnings.
**Action:** When working on dashboard applications with charting libraries, dynamically import tab views to keep critical initial JavaScript lightweight.
