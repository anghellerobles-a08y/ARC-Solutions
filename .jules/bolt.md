## 2025-05-18 - Heavy Library Bundle Splitting with Recharts
**Learning:** Recharts accounts for >370kB of bundled JS; loading it eagerly in `App.tsx` forces initial chunk size over Vite's 500kB warning threshold (538.42 kB). Code-splitting tab views via `React.lazy` isolates Recharts into an on-demand chunk, dropping initial load JS by ~71.8% to 151.87 kB.
**Action:** Always code-split routes or major subviews that depend on heavy chart/visualization libraries (`recharts`, `chart.js`) using `React.lazy` and `Suspense`.
