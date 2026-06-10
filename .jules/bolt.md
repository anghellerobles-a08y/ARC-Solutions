# Bolt's Performance Journal

## 2025-05-14 - Initial Bundle Size Bottleneck
**Learning:** The initial bundle size is 538.42 kB, which exceeds the 500 kB limit. The `recharts` library used in the `Dashboard` component is the main contributor to this bloat.
**Action:** Use React.lazy and Suspense to code-split heavy components that depend on large libraries (like Recharts) to keep the initial bundle size below the 500kB warning threshold.
