## 2025-05-18 - Component Code Splitting for heavy visualization dependencies
**Learning:** In React single-page applications using heavy charting libraries like Recharts, static component imports pull the entire chart dependency tree into the main entry bundle (~538 kB).
**Action:** Use `React.lazy` and `Suspense` for tab-level components containing heavy libraries like Recharts to separate chunk loading and keep the main entry chunk lightweight (~151 kB).
