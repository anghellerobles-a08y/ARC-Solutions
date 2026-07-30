## 2025-02-12 - App Component Lazy Loading and Recharts Splitting
**Learning:** Heavy visualization libraries like Recharts (used inside `Dashboard`) bloat the initial Javascript bundle size, prompting Vite production warnings (> 500kB). Code splitting tab routes into React.lazy chunks cleanly isolates dependencies, reducing initial payload and improving critical rendering path.
**Action:** Use React.lazy and Suspense with a lightweight, brand-colored spin loader fallback for all secondary and non-critical components that contain heavy dependency trees like charts or modal forms.
