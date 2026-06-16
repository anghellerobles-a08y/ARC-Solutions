# Bolt's Performance Journal

## 2024-05-24 - Initial Performance Audit
**Learning:** The initial bundle size is 538.42 kB, which exceeds the 500 kB recommendation. This is largely due to heavy dependencies like `recharts` being included in the main bundle, even though they are only used in the Dashboard tab.
**Action:** Implement code splitting using `React.lazy` and `Suspense` to move tab-specific components into separate chunks.
