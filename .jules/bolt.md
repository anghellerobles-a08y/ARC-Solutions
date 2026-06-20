# Bolt's Performance Journal

## 2025-05-15 - Initial Bundle Size Bottleneck
**Learning:** The initial JavaScript bundle size exceeds Vite's 500kB limit (currently 538.42 kB). This is primarily due to heavy dependencies like `recharts` being included in the main chunk, even though they are only needed for the Dashboard view.
**Action:** Implement code splitting using `React.lazy` and `Suspense` to move route-level components into separate chunks, ensuring that the initial load only contains the code necessary for the shell and the default view.
