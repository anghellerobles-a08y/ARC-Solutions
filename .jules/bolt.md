## 2025-05-15 - Initial Performance Audit
**Learning:** The application's initial bundle size (538.42 kB) exceeds Vite's recommended limit of 500 kB, largely due to heavy libraries like Recharts being included in the main entry point. Additionally, statistical calculations and filtering logic in components like Dashboard and ClientesTable are performed on every render without memoization.
**Action:** Implement code splitting for route-level components and memoize expensive calculations and filtering logic to improve both load-time and runtime performance.
