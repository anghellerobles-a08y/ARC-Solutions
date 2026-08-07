# Bolt's Performance Journal

## 2025-03-05 - Dynamic Chunk Loading & Component Memoization
**Learning:** Vite issues bundle warnings when generated JavaScript chunks exceed 500 kB after minification. The large initial bundle size (538.42 kB) is primarily caused by Recharts being included directly in the synchronous import path of the main App bundle, even when not immediately viewing the Dashboard or Reportes. Code splitting using `lazy` and `Suspense` isolates heavy library components like Recharts and Lucide-react into their own async-loaded chunks, dramatically reducing initial entry bundle sizes and improving FCP/LCP.
**Action:** Always lazy load heavy data visualization panels and use `Suspense` with light spinner indicators, and memoize computations inside data-heavy list or panel components to avoid CPU thrashing on parent-triggered tab state updates.
