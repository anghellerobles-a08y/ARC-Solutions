## 2024-10-12 - Recharts Chunking and Code Splitting

**Learning:** Heavy data visualization libraries like Recharts significantly inflate the entry bundle size (over 380kB chunk size). Lazy loading tab components isolates vendor chunk loads until required by active navigation.
**Action:** Always code-split heavy chart and reporting components with `React.lazy` and `<Suspense>` to keep the initial JS bundle size under 200 kB.
