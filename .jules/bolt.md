# Bolt's Performance Journal

This journal tracks critical, codebase-specific performance learnings for BMSC Mora Gestión.

## 2024-11-20 - [Bundle Size Code-Splitting and React Memoization Optimization]
**Learning:** The Vite production build generates a warning due to a large initial JavaScript bundle size (538.42 kB, which exceeds the 500 kB limit after minification). This is largely caused by heavy imports like Recharts within `Dashboard.tsx` and complex layouts. Splitting components with `React.lazy` and `Suspense` significantly reduces the initial load size. Additionally, costly statistical computations and text filtering run on every render in `Dashboard.tsx` and `ClientesTable.tsx`, leading to unnecessary overhead which can be avoided using `useMemo` and `React.memo`.
**Action:** Isolate tab components (`Dashboard`, `ClientesTable`, `Reportes`) into separate dynamic chunks via `React.lazy`. Implement `useMemo` for reductions and filtering logic, and wrap subcomponents in `React.memo`.
