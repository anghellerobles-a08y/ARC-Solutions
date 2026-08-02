# Bolt's Performance Journal

This journal tracks critical performance learnings, bottlenecks, and patterns specific to the BMSC Mora Gestión application.

## 2025-08-02 - Code Splitting & Memoization in BMSC Mora Gestión
**Learning:** Recharts is a heavy dependency that bloats the initial bundle size to over 538 kB, exceeding Vite's warning threshold of 500 kB. In addition, parent-triggered re-renders propagate down to unmemoized child components (Dashboard, ClientesTable, Reportes) causing redundant DOM and chart recalculations.
**Action:** Use `React.lazy` and `React.Suspense` to split heavy tab components (like Dashboard which uses Recharts) into separate chunks. Memoize components with `React.memo` and expensive calculations (such as search filters and statistial reductions) with `useMemo`.
