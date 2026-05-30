## 2026-05-30 - Large initial bundle size due to Recharts
**Learning:** The application's initial bundle size exceeds the 500kB warning threshold (538.42 kB) because the `Dashboard` component, which depends on the `recharts` library, is imported synchronously in `App.tsx`.
**Action:** Use `React.lazy` and `Suspense` to code-split the `Dashboard` component. This will move `recharts` into a separate chunk, significantly reducing the initial load time for users who don't need the dashboard immediately.
