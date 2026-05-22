# Bolt's Journal - BMSC Mora Gestión

## 2025-05-14 - Code splitting for heavy components
**Learning:** The initial bundle size was 538.42 kB, exceeding the 500 kB warning threshold. This was primarily due to including all view components (Dashboard, ClientesTable, Reportes) and their dependencies (like Recharts) in the main chunk. Implementing `React.lazy` and `Suspense` reduced the main bundle size to 151.87 kB (a ~72% reduction).
**Action:** Use `React.lazy` for route-level or tab-level components that pull in large third-party libraries or contain heavy logic to keep the initial load fast.
