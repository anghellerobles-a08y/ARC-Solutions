## 2025-05-18 - Isolated Recharts Bundle with Code Splitting

**Learning:** Recharts accounts for the vast majority (~375 kB minified) of the application bundle. Synchronously importing `Dashboard` in `App.tsx` forces Recharts into the main JavaScript bundle, triggering Vite's 500 kB chunk warning and slowing initial page load.

**Action:** Wrap Recharts-dependent view components in `React.lazy` and `Suspense` at the router/tab level to isolate heavy chart dependencies into separate dynamic chunks, reducing initial bundle size by over 70%.
