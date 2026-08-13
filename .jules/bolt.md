# Bolt's Performance Journal

## 2025-01-25 - Code Splitting Recharts in BMSC Mora Gestión
**Learning:** Recharts is a heavy library that increases the initial bundle size of the application to over 500kB, causing Vite to issue performance warnings. By lazy loading the heavy components (specifically those dependent on Recharts, like Dashboard), we can reduce the initial chunk size from 538.42 kB down to 151.87 kB (~71.8% reduction).
**Action:** Always use React.lazy and Suspense to isolate heavy visualization components (like Recharts) into separate chunks in React applications with performance warnings, and ensure to use the `Loader2` spinner with `text-msc-green` as fallback.
