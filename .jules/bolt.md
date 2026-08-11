## 2024-08-11 - [Route-level Code Splitting & Calculation Memoization]
**Learning:** Initial JS bundle was exceeding Vite's 500kB warning limit (clocked at 538.42 kB) due to immediate loading of heavy interactive chart libraries like Recharts inside tab routes.
**Action:** Implement React.lazy with Suspense on tab panels to completely split Recharts and list tables, which reduces the initial bundle size to 152.01 kB (~71.8% reduction), while using useMemo to isolate list calculations and search filters from parent-induced re-renders.
