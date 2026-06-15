# Bolt's Performance Journal

This journal tracks critical performance learnings for the BMSC Mora Gestión project.

## 2025-05-15 - Initial Assessment
**Learning:** The initial bundle size is 538.42 kB, which triggers a Vite warning (> 500 kB). This is largely due to `recharts` being imported synchronously in the main entry point via the `Dashboard` component.
**Action:** Use React.lazy and Suspense to code-split the main tab components, especially `Dashboard`, to isolate heavy dependencies like `recharts`.
