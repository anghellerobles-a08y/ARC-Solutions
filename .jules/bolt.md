## 2025-05-14 - Code Splitting for Tabbed Navigation
**Learning:** The application had a large initial bundle size (538kB) because all main components, including the heavy Recharts-dependent Dashboard, were imported directly in App.tsx. This caused Vite to issue a performance warning.
**Action:** Use React.lazy and Suspense to split the application into smaller chunks based on routes or main tabs. This reduces the initial load time significantly by only loading heavy dependencies when the user navigates to the relevant section.
