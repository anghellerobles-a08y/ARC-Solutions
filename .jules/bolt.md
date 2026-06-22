## 2025-05-15 - Code splitting reduces initial bundle size by 72%
**Learning:** Implementing React.lazy and Suspense for major route/tab components in this application significantly reduced the initial JavaScript bundle size from 538.42 kB to 151.87 kB. This is particularly effective here as the Dashboard component pulls in heavy dependencies like Recharts.
**Action:** Always consider lazy loading for heavy feature components or those with large third-party dependencies to keep the initial entry chunk under the 500kB warning threshold.
