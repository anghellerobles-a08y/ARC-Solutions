## 2025-05-15 - Initial Performance Audit
**Learning:** The application exceeds the 500kB bundle size limit primarily due to `recharts` being included in the main bundle. Direct imports in `App.tsx` cause all route components to be bundled together.
**Action:** Use `React.lazy` and `Suspense` to code-split heavy components like `Dashboard` that depend on large libraries.
