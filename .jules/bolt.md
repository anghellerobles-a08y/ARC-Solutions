## 2025-05-15 - Code splitting for large dependencies
**Learning:** The initial JavaScript bundle size exceeded 500kB due to the inclusion of `recharts` in the main chunk. Even when not on the Dashboard tab, the library was being loaded.
**Action:** Use `React.lazy` and `Suspense` to isolate route-level or tab-level components that import heavy libraries into separate chunks.
