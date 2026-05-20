# Bolt's Journal - BMSC Mora Gestión

## 2025-05-15 - Initial Performance Baseline
**Learning:** The initial bundle size is ~538kB, which triggers Vite's warning (>500kB). Recharts is a major contributor to this bundle.
**Action:** Use React.lazy and Suspense to code-split components that use Recharts (Dashboard) to reduce the initial bundle size.
