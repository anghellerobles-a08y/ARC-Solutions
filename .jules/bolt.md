## 2026-06-30 - Code Splitting with React.lazy and Recharts
**Learning:** Implementing code splitting in App.tsx reduced the initial JavaScript bundle size from 538.42 kB to 151.88 kB (~72% reduction) by isolating the Recharts-dependent Dashboard component and other tab components into separate lazy-loaded chunks.
**Action:** Always consider code splitting for routes or tabs that import heavy charting libraries like Recharts to stay below the 500kB Vite bundle warning threshold.
