## 2024-05-24 - [Memoization of derived state]
**Learning:** In dashboard components with multiple aggregate statistics and tables with filtering, derived state is often recalculated on every render. Even with small datasets, these components can re-render frequently due to UI state (modals, tabs, hover effects).
**Action:** Always wrap filter/reduce/map operations on data props in `useMemo` when the component has internal UI state that doesn't affect the data processing.
