## 2025-05-15 - [Bundle Size Optimization]
**Learning:** The application bundle exceeded the 500kB limit primarily due to Recharts being bundled in the main chunk. Code splitting using `React.lazy` and `Suspense` for feature-level components successfully reduced the initial bundle size from 538.42 kB to 151.87 kB (~72% reduction).
**Action:** Always use code splitting for routes or large feature components that depend on heavy third-party libraries like Recharts to keep the initial load fast.
