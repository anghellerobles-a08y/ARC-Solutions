## 2024-05-24 - Code Splitting for heavy dependencies
**Learning:** Initial bundle size exceeded 500kB primarily due to the Recharts library used in the Dashboard component. By implementing code splitting at the route level, the initial bundle was reduced by ~72%.
**Action:** Always check for heavy third-party libraries (like Recharts) and consider lazy loading the components that depend on them to optimize initial load performance.
