## 2025-01-24 - High-Impact Code Splitting with Recharts
**Learning:** The application's initial bundle size was exceeding Vite's 500kB warning threshold (538.42 kB) primarily due to the heavy `recharts` dependency used in the `Dashboard` component. Lazy loading the main tab components, especially the `Dashboard`, isolated these dependencies into separate chunks.
**Action:** Always check for heavy visualization libraries like Recharts and ensure they are isolated in lazy-loaded chunks to keep the initial bundle size lean.
