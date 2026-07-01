# Bolt's Performance Journal

This journal tracks critical performance learnings for the BMSC Mora Gestión codebase.

## 2025-05-15 - Initial Performance Analysis
**Learning:** The initial bundle size is 538.42 kB, which exceeds the 500 kB warning threshold in Vite. The `recharts` library used in `Dashboard.tsx` is likely a major contributor to this size.
**Action:** Use code splitting (React.lazy) to isolate heavy components like Dashboard and other tab components into separate chunks, reducing the initial load time.
