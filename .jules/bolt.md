## 2026-08-15 - Code Splitting Tab Routes and Memoizing Heavy Calculations

**Learning:** Isolating heavy visualization libraries (e.g., Recharts used in Dashboard) via `React.lazy()` and `<Suspense>` dramatically shrinks the main entry point JS chunk (from 538 kB to 151 kB), resolving Vite's bundle size warning without requiring Rollup manualChunk split configurations.

**Action:** Look for heavy charting or reporting components in tabbed navigation layouts and convert them to lazy-loaded components to improve initial page load speed.
