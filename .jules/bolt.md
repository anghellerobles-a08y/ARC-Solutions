## 2026-06-09 - Code Splitting for Large Dependencies
**Learning:** Large libraries like Recharts significantly bloat the initial bundle size (~375kB), causing Vite to issue warnings. Lazy loading components that wrap these libraries effectively isolates the weight.
**Action:** Always check the output of `npm run build` for large chunks and use `React.lazy` to split them out from the main entry point.
