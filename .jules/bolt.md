# Bolt's Performance Journal - Critical Learnings

## 2025-05-18 - Initializing Journal
**Learning:** Codebase initially loaded Recharts and all sub-components into the main bundle chunk (~538 kB), triggering Vite's >500 kB chunk warning.
**Action:** Use React.lazy and Suspense for tab-based views to split heavy third-party dependencies (like Recharts in Dashboard) into separate async chunks.
