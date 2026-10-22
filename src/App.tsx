import { useState, lazy, Suspense } from 'react';
import { LayoutDashboard, Users, FileBarChart, LogOut, Bell, Loader2 } from 'lucide-react';
import { Cliente, ChartData } from './types';

// Lazy load heavy tab components to enable dynamic code splitting and reduce initial bundle size
const Dashboard = lazy(() => import('./components/Dashboard'));
const ClientesTable = lazy(() => import('./components/ClientesTable'));
const Reportes = lazy(() => import('./components/Reportes'));

const MOCK_CLIENTES: Cliente[] = [
  { id: 1, nombre: 'Carlos Méndez', ci: '12345678', monto: 12500, diasMora: 45, estado: 'warning' },
  { id: 2, nombre: 'Ana Rodríguez', ci: '87654321', monto: 8900, diasMora: 30, estado: 'warning' },
  { id: 3, nombre: 'Roberto Fernández', ci: '45678912', monto: 25000, diasMora: 60, estado: 'critical' },
  { id: 4, nombre: 'María González', ci: '78912345', monto: 5000, diasMora: 15, estado: 'normal' },
  { id: 5, nombre: 'José López', ci: '32165487', monto: 18000, diasMora: 50, estado: 'warning' },
];

const MOCK_CHART_DATA: ChartData[] = [
  { mes: 'Enero', monto: 45000 },
  { mes: 'Febrero', monto: 52000 },
  { mes: 'Marzo', monto: 48000 },
  { mes: 'Abril', monto: 61000 },
  { mes: 'Mayo', monto: 58000 },
  { mes: 'Junio', monto: 72000 },
];

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clientes' | 'reportes'>('dashboard');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-msc-dark text-white flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-msc-gold rounded-lg flex items-center justify-center font-bold text-msc-dark text-xl">
              B
            </div>
            <h1 className="text-xl font-bold tracking-tight">MORA BMSC</h1>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'dashboard' ? 'bg-msc-green text-white' : 'text-slate-300 hover:bg-msc-green/50'
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="font-medium text-sm">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('clientes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'clientes' ? 'bg-msc-green text-white' : 'text-slate-300 hover:bg-msc-green/50'
              }`}
            >
              <Users size={20} />
              <span className="font-medium text-sm">Gestión de Clientes</span>
            </button>
            <button
              onClick={() => setActiveTab('reportes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'reportes' ? 'bg-msc-green text-white' : 'text-slate-300 hover:bg-msc-green/50'
              }`}
            >
              <FileBarChart size={20} />
              <span className="font-medium text-sm">Reportes</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto p-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white transition-colors">
            <LogOut size={20} />
            <span className="font-medium text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
          <h2 className="font-bold text-slate-700 capitalize">
            {activeTab === 'dashboard' ? 'Panel Principal' : activeTab}
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-msc-dark transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-700 leading-tight">Admin User</p>
                <p className="text-[10px] text-slate-500 leading-tight">Gestor de Cobranzas</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-msc-beige flex items-center justify-center text-msc-dark font-bold text-xs">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-64" data-testid="suspense-loader">
                <Loader2 className="animate-spin text-msc-green" size={32} />
              </div>
            }
          >
            {activeTab === 'dashboard' && (
              <Dashboard clientes={MOCK_CLIENTES} chartData={MOCK_CHART_DATA} />
            )}
            {activeTab === 'clientes' && (
              <ClientesTable clientes={MOCK_CLIENTES} />
            )}
            {activeTab === 'reportes' && (
              <Reportes />
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
