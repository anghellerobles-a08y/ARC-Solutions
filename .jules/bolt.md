## 2025-05-15 - Initial Bundle Optimization & Memoization
**Learning:** Initial bundle size was over 500kB primarily due to Recharts in the Dashboard. React.lazy and Suspense successfully reduced the entry chunk to ~164kB.
**Action:** Always check bundle composition for heavy UI libraries and isolate them using code splitting when they are not needed on all routes/tabs.

## 2025-05-15 - Statistical Reduction Optimization
**Learning:** Consolidating multiple .reduce and .filter calls into a single O(N) pass within useMemo improves performance on data-heavy dashboards.
**Action:** Use useMemo for complex data transformations and ensure safety checks for empty datasets are included.
