# Bolt's Performance Journal

## 2024-11-20 - Initializing Performance Optimization for BMSC Mora Gestión
**Learning:** The React/TypeScript application builds a single large bundle of ~538.42 kB. This triggers Vite's chunk size warning (>500 kB). The main contributor is the inclusion of Recharts in the Dashboard component, which gets loaded on initial page load regardless of whether the user is on the Dashboard, Gestión de Clientes, or Reportes tabs.
**Action:** Implement code splitting using React.lazy and Suspense for components like Dashboard, ClientesTable, and Reportes. This will isolate heavy chart dependencies into their own dynamic chunks, significantly reducing initial load times and bundle sizes.
