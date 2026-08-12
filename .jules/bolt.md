# Bolt's Performance Journal

This journal documents critical performance learnings and discoveries for the Mora BMSC codebase.

## 2025-03-04 - Code Splitting Implementation
**Learning:** Heavy components such as the Recharts-based Dashboard component and tab panels can easily bloat the initial JavaScript bundle size, triggering Vite's 500 kB threshold warning (initial build: 538.42 kB).
**Action:** Use `React.lazy` and `Suspense` with an elegant, brand-aligned fallback loader to dynamically load tab components (`Dashboard`, `ClientesTable`, `Reportes`). This reduces the initial entry bundle significantly and improves Time to Interactive (TTI).
