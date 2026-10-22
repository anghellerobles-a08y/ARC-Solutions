## 2025-02-22 - Code Splitting Recharts and Tab Components

**Learning:** Heavy visualization libraries like Recharts in Dashboard contribute to bundle sizes exceeding Vite's 500 kB limit (~538 kB initial load). Isolating tab components with `React.lazy` and `<Suspense>` reduces initial JS load to ~151 kB (~71.8% reduction).

**Action:** Always lazy load heavy visualization components and routes that are not immediately required on initial page mount.
