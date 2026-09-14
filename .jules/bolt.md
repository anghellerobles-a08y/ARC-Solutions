## 2025-05-18 - Heavy Library Bundle Splitting with React.lazy
**Learning:** Recharts accounts for the majority of the application bundle size (~375 kB). Dynamic importing using `React.lazy()` and `Suspense` isolates this heavy library into an asynchronous chunk, cutting initial JS payload by over 71%.
**Action:** Always lazy-load heavy chart/visualization components to keep the initial application bundle lean and fast.
