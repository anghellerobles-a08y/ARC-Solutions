# Bolt's Performance Journal - BMSC Mora Gestión

## 2025-05-15 - Initial Bundle Size Bottleneck
**Learning:** The initial production build produces a single JavaScript chunk of 538.42 kB, which exceeds Vite's 500 kB limit. This is primarily due to heavy dependencies like Recharts being bundled into the main entry point, even if the user hasn't visited the Dashboard yet.
**Action:** Implement code splitting using `React.lazy` and `Suspense` to isolate heavy components (like Dashboard which uses Recharts) into separate chunks. This will significantly reduce the initial load time.
