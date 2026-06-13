## 2025-01-24 - Code Splitting for Recharts
**Learning:** Initial bundle size exceeded 500kB due to heavy libraries like Recharts being included in the main chunk.
**Action:** Use React.lazy and Suspense to isolate heavy components into separate chunks.
