## 2025-02-23 - Code Splitting Tab Routes Reduces Initial JS Chunk Size
**Learning:** Monolithic imports of heavy visualization libraries (such as Recharts in `Dashboard.tsx`) bloat the initial JavaScript bundle beyond the 500kB Vite warning threshold, increasing initial page load time even when users do not immediately view that tab.
**Action:** Use `React.lazy` and `Suspense` with explicit fallback loaders for tab components to split chunks effectively and keep the initial bundle lightweight.
