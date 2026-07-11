# Bolt Performance Journal

## 2025-05-15 - Initial Bundle Optimization
**Learning:** The initial bundle size was 538.42 kB, which exceeded the 500 kB limit recommended by Vite. This was largely due to `recharts` being included in the main chunk. Implementing code splitting with `React.lazy` reduced the initial JS bundle to 151.87 kB (~72% reduction).
**Action:** Use `React.lazy` and `Suspense` to code-split the application and isolate heavy dependencies like `recharts` into separate chunks.
