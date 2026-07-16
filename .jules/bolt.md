## 2025-07-16 - Bundle Size Code Splitting of Heavy Charting Components
**Learning:** Heavy libraries like Recharts significantly bloat the initial JavaScript bundle size, triggering Vite's 500kB limit warnings. Utilizing React.lazy and Suspense for page tabs effectively isolates such heavy dependencies, cutting the initial bundle size by ~72% and preventing redundant download/parsing overhead for main entry chunk.
**Action:** Always identify route/tab level components importing heavy libraries like Recharts and split them dynamically using lazy loading with elegant fallbacks.
