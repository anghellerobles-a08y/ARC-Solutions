## 2025-05-15 - Code Splitting for Large Bundle Sizes
**Learning:** The application's initial bundle size exceeded Vite's 500kB warning threshold (reaching 538.42 kB) primarily due to the inclusion of heavy libraries like Recharts in the Dashboard component.
**Action:** Always check the production build output for bundle size warnings and use React.lazy/Suspense to isolate tab-based components or heavy visualizations into separate chunks. Implementing this reduced the initial JS bundle to ~152 kB.
