## 2025-05-18 - Isolated Recharts heavy bundle via React.lazy code splitting

**Learning:** Recharts dependency in Dashboard caused the initial JS bundle size to exceed Vite's 500kB warning threshold (538.42 kB). Using React.lazy route component code splitting isolates Recharts into a separate chunk, reducing the entry bundle size down to 151.87 kB (~71.8% reduction).

**Action:** Always code-split heavy chart components and route tabs using React.lazy and Suspense to keep the main entry chunk lightweight.
