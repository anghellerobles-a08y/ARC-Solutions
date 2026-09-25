## 2025-09-25 - Code Splitting Recharts Component Dynamic Imports
**Learning:** Heavy visualization libraries like Recharts in Dashboard pull in ~380kB JS code that bloats the initial bundle beyond Vite's 500kB limit (538.42 kB). Using `React.lazy` and `Suspense` isolates Recharts into a lazy chunk and slashes the initial entry bundle size down to ~151 kB (~71.8% reduction).
**Action:** Use `React.lazy` for tab-level components that import large external libraries to keep the main bundle lightweight.
