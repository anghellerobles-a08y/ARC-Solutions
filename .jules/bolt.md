# Bolt's Performance Journal

## 2025-05-14 - Initial Bundle Size Bottleneck
**Learning:** The initial JavaScript bundle size is 538.42 kB, which exceeds Vite's 500 kB recommendation and causes a build warning. This is primarily due to all main components (Dashboard, ClientesTable, Reportes) being imported synchronously in App.tsx.
**Action:** Implement code splitting using React.lazy and Suspense to isolate heavy components (like Dashboard which uses Recharts) into separate chunks.
