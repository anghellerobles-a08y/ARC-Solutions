## 2026-07-02 - Code Splitting for Recharts
**Learning:** Including Recharts in the main bundle caused it to exceed the 500kB warning threshold (538.42 kB). Using React.lazy and Suspense to isolate Recharts-dependent components (like Dashboard) into separate chunks reduced the initial bundle size by ~72% (to 151.88 kB).
**Action:** Always lazy-load heavy visualization components or routes that use Recharts to keep the initial payload light.
