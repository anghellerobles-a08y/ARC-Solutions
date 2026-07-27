## 2025-07-27 - Large Initial Bundle Due to Recharts
**Learning:** Recharts is a heavy visualization library that gets bundled entirely into the main entrypoint by default, triggering Vite's >500kB warning (538.42 kB bundle). Code splitting via dynamic imports / React.lazy reduces the initial bundle size dramatically.
**Action:** Use React.lazy and Suspense to isolate components using heavy libraries (like Recharts) into separate chunks.
