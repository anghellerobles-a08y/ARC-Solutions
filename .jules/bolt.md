## 2026-10-11 - Code Splitting Recharts in Tab Components
**Learning:** Including heavy visualization libraries like Recharts in synchronously loaded tab components causes Vite bundle size warnings (>500kB initial chunk). Dynamic import code-splitting (`React.lazy`) on tab views isolates heavy dependencies into separate chunks, dropping main bundle size by >70% (~538kB to ~151kB).
**Action:** Always lazy load top-level tab views or modal components that rely on heavy charting or data libraries using `React.lazy` and `Suspense`.
