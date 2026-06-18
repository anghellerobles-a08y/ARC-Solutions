## 2025-05-14 - Code Splitting for Heavy Visualization Libraries
**Learning:** Using `React.lazy` and `Suspense` for components that import heavy libraries (like `recharts`) is critical in Vite to stay below the 500kB chunk size warning. In this project, it reduced the main bundle size by ~72%.
**Action:** Always identify route-level or heavy-component-level boundaries for lazy loading when large dependencies are involved.
