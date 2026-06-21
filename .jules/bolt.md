## 2025-05-14 - Implementing Code Splitting for Large Dependencies
**Learning:** The application had a single large JS bundle (538.42 kB) because it was importing heavy libraries like Recharts in the main bundle, even though they were only needed in specific tabs.
**Action:** Use `React.lazy` and `Suspense` to isolate heavy components (like those using Recharts) into separate chunks. This reduced the initial bundle size by ~72% (from 538.42 kB to 151.98 kB), keeping it well below the 500 kB Vite warning threshold.
