## 2025-05-14 - Implementing Code Splitting and Memoization
**Learning:** Initial bundle size was over the 500kB limit (538.42 kB) primarily due to heavy charting libraries in the Dashboard component. Implementing React.lazy and Suspense successfully isolated the Dashboard into its own chunk (~375 kB), reducing the initial bundle to 151.87 kB.
**Action:** Use code splitting for route-level or tab-level components that pull in large dependencies like Recharts. Complement this with useMemo to ensure that even after the component is loaded, it remains efficient during re-renders.
