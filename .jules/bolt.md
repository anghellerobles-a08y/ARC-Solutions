## 2025-05-15 - Code Splitting for Heavy Visualization Libraries
**Learning:** The initial bundle size was 538kB, primarily driven by the Recharts library used in the Dashboard component. By implementing route-based code splitting with React.lazy, the entry bundle was reduced to 152kB, moving the heavy dependency into an async chunk.
**Action:** Always check for large third-party libraries (like Recharts, D3, or heavy UI frameworks) and isolate them using React.lazy/Suspense to keep the critical path lean.
