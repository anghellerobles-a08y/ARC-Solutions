# Bolt's Performance Journal

## 2024-05-15 - Initial Bundle Size Warning
**Learning:** React bundle was exceeding the 500kB warning threshold (538.42 kB) because all components, including those wrapping heavy libraries like Recharts (Dashboard) and large modal systems, were bundled into a single main chunk loaded on initial render.
**Action:** Use code splitting with `React.lazy` and `Suspense` to split heavy tab components (Dashboard, ClientesTable, Reportes) into separate chunks. This reduces the initial JS load size and defer loading of heavy UI elements until needed.
