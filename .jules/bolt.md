## 2025-05-18 - Code Splitting Recharts in BMSC Mora App
**Learning:** Recharts is a heavy library (~375kB) imported by the Dashboard component. Importing it synchronously in App.tsx bloats the initial bundle beyond Vite's 500kB warning threshold (538.42 kB). Using React.lazy for tab components isolates Recharts into a lazy chunk, dropping initial JS payload to 151.87 kB (~71.8% reduction).
**Action:** Always code-split heavy chart visualization components using React.lazy and Suspense in tabbed dashboard layouts.
