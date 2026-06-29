## 2025-05-14 - Initial Performance Optimizations
**Learning:** Initial JS bundle was over the 500kB warning threshold (538.42 kB) primarily due to Recharts in the Dashboard. Implementing code splitting with React.lazy at the tab level reduced the initial bundle to ~152kB.
**Action:** Use React.lazy and Suspense for components with heavy library dependencies like Recharts or complex data tables.
