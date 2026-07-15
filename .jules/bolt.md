## 2025-05-15 - Code splitting and Component Memoization
**Learning:** Combining code splitting (React.lazy) with component-level memoization (useMemo) provides a dual benefit: it reduces the initial JS payload (especially for heavy libraries like Recharts) and ensures that subsequent interactions within the app are smooth by avoiding redundant calculations.
**Action:** Always check for heavy dependencies (like charting libraries) as prime candidates for lazy loading, and use useMemo for data transformations that are triggered by state changes that could be frequent (like search inputs).
