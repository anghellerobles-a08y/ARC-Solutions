# Bolt's Performance Journal

This journal tracks critical, non-routine performance learnings specific to this codebase's architecture.

## 2024-07-22 - [App bundle-size reduction via code splitting]
**Learning:** Combining dynamic route or tab-based code splitting using React.lazy and Suspense was highly effective for this Vite + React application. Because Recharts (used in Dashboard.tsx) is a heavy dependency, it bloated the initial JS chunk size to 538 kB, exceeding the Vite 500 kB limit warning. By lazy-loading the Dashboard, ClientesTable, and Reportes tabs individually, the initial index bundle size dropped from 538.42 kB to 151.98 kB (~72% bundle reduction), keeping the entry point lightweight.
**Action:** Always inspect build bundle warnings in Vite and use dynamic React.lazy imports for heavy dashboard/analytics pages or third-party charting packages to optimize Initial Load Time.
