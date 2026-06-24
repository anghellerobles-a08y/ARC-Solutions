## 2025-05-15 - Code splitting for heavy visualization libraries
**Learning:** The use of Recharts in the Dashboard component caused the initial JavaScript bundle to exceed Vite's 500kB warning threshold (538.42 kB). Since the Dashboard is only one of several tabs, this bloat affects the initial load time even for users not viewing the dashboard.
**Action:** Use `React.lazy` and `Suspense` to isolate components importing heavy third-party libraries into separate chunks. This reduced the main bundle size by ~72% (to 151.88 kB) in this application.
