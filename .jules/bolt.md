# Bolt's Performance Journal

## 2025-01-24 - Initial Performance Audit
**Learning:** The initial production bundle size is ~538kB, which triggers Vite's large chunk warning (>500kB). This is primarily due to heavy dependencies like `recharts` being bundled into the main entry point.
**Action:** Implement code splitting via `React.lazy` and `Suspense` to isolate the Dashboard (which uses Recharts) and other main views into separate chunks.

## 2025-01-24 - Code Splitting Results
**Learning:** Implementing code splitting in `App.tsx` reduced the initial JavaScript bundle size from ~538kB to ~152kB. The `Dashboard` component, containing the `recharts` library, was moved to a separate chunk of ~375kB.
**Action:** Always use `React.lazy` for route-level components or heavy views that depend on large third-party libraries.
