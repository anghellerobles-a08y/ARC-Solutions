## 2026-07-04 - Initial Bundle Size Optimization via Code Splitting
**Learning:** Implementing code splitting in App.tsx significantly reduced the initial JavaScript bundle size from 538.42 kB to 151.87 kB (~72% reduction) by isolating the Recharts-dependent Dashboard component into a separate lazy-loaded chunk.
**Action:** Use React.lazy and Suspense to isolate heavy components (e.g., those using large libraries like Recharts) into separate chunks to keep the initial bundle size below the 500kB warning threshold.
