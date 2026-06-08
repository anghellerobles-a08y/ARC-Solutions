## 2025-05-15 - Code splitting reduces initial bundle size by ~70%
**Learning:** In projects using heavy visualization libraries like Recharts, the main bundle size can easily exceed performance budgets. Lazy loading these components significantly improves initial load performance.
**Action:** Always identify heavy dependencies (like Recharts) and isolate their parent components using React.lazy and Suspense to keep the critical path lean.
