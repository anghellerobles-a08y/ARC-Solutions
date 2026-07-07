## 2025-05-15 - Code Splitting for Large Dependencies
**Learning:** The application used `recharts`, which is a large library. Including it in the main bundle caused it to exceed the 500kB warning threshold (538.42 kB).
**Action:** Use `React.lazy` and `Suspense` to split components that depend on heavy libraries (like `Dashboard` with `recharts`) into separate chunks. This reduced the initial bundle size to 151.87 kB (~72% reduction).
