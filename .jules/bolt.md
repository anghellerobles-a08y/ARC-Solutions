## 2025-05-15 - Code Splitting and Library Isolation
**Learning:** The initial bundle size was exceeding 500kB primarily due to the `recharts` library being bundled in the main entry point. In a tabbed interface like this, loading heavy visualization libraries eagerly on the first page load (even if the Dashboard isn't the only tab) penalizes the "Time to Interactive" for all users.
**Action:** Always check for heavy third-party libraries (like Recharts, D3, etc.) and isolate them into lazy-loaded chunks using `React.lazy` and `Suspense` at the route or tab level.
