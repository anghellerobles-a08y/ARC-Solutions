# Bolt's Performance Journal

## 2025-09-28 - Route/Tab Code Splitting for Heavy Recharts Library
**Learning:** In this application, importing Recharts directly in `Dashboard.tsx` bloated the initial main JavaScript bundle (`index.js`) to 538.42 kB, exceeding Vite's 500 kB chunk warning threshold.
**Action:** Always lazy-load heavy tab components like `Dashboard` in `App.tsx` using `React.lazy` and `Suspense` to split heavy libraries into separate dynamic chunks, keeping initial load size under ~150 kB.
