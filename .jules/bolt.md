# Bolt's Performance Journal

## 2025-02-15 - Initial Assessment
**Learning:** Found that Vite warns about a chunk size larger than 500 kB (index.js is 538.42 kB). This is due to loading the entire Recharts dependency as part of the initial bundle.
**Action:** Implement React.lazy and Suspense for heavy components like Dashboard (which pulls in Recharts) and maybe others like ClientesTable and Reportes to keep the initial chunk size well under 500 kB.
