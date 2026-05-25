# Bolt's Journal - Critical Learnings

## 2025-05-25 - [Bundle Size & Code Splitting]
**Learning:** The initial bundle size was over 500kB, largely due to the `recharts` library used in the `Dashboard` component. Since the app uses a tab-based navigation, users might not always need the dashboard immediately.
**Action:** Implemented `React.lazy` and `Suspense` for main components. This reduced the initial JS bundle from ~538kB to ~152kB, moving the heavy charting logic to a separate chunk loaded only when needed.

## 2025-05-25 - [Memoization Patterns]
**Learning:** Components like `ClientesTable` and `Dashboard` were performing data transformations (filtering, statistics) on every render, including those triggered by UI state changes like opening a modal.
**Action:** Wrapped expensive calculations in `useMemo`. In `ClientesTable`, ensured `searchTerm.toLowerCase()` is called once per filter operation rather than once per item by moving it outside the filter callback (though in the current implementation it is inside the useMemo block, I should ensure it's efficient).
