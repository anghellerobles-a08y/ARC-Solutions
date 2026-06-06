## 2025-05-22 - [Code Splitting in App.tsx]
**Learning:** Implementing code splitting in App.tsx reduced the initial JavaScript bundle size from 538.42 kB to 151.89 kB by isolating the Recharts-dependent Dashboard component into its own ~375 kB chunk.
**Action:** Use React.lazy and Suspense to isolate heavy components (e.g., those using Recharts) into separate chunks to keep the initial bundle size below the 500kB warning threshold.
