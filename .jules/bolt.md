# Bolt's Performance Journal

This journal tracks critical performance learnings, non-routine findings, surprising optimization failures, or unique patterns discovered in the BMSC Mora Gestión codebase.

## 2025-05-15 - Initial Assessment of BMSC Mora Gestión Bundle Size
**Learning:** The initial production JS bundle was 538.42 kB, triggering the Vite build chunk size warning (> 500 kB). This was mainly because the Recharts package is bundled into the single index chunk along with static/mock data and basic tables.
**Action:** Use code splitting (React.lazy + Suspense) on heavy component tabs like `Dashboard` (using Recharts), `ClientesTable` (heavy interactions), and `Reportes` to keep the initial chunk size well under 500 kB.
