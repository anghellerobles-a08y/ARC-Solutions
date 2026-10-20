## 2025-05-18 - Code Splitting Tab Components with React.lazy
**Learning:** Heavy visualization libraries like Recharts in `Dashboard.tsx` account for over 370 kB of JavaScript, pushing the initial bundle size past Vite's 500 kB warning threshold when imported statically.
**Action:** Use `React.lazy` and `Suspense` in top-level tab routers (`App.tsx`) to split tab components into dynamic chunks, dropping initial entry point bundle size by ~71.8%.
