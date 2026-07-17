# Bolt Journal: BMSC Mora Gestión

## 2024-11-20 - Initial Bundle Size Optimization
**Learning:** Recharts is a heavy library that bloats the initial bundle to 538.42 kB (above Vite's 500 kB threshold). Splitting Dashboard, ClientesTable, and Reportes into separate lazy loaded chunks keeps the initial loading chunk light and responsive.
**Action:** Use React.lazy and Suspense with a custom Spinner loading fallback (using Loader2 from lucide-react, animate-spin, and text-msc-green) to split heavy routes.
