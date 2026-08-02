import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Clock } from 'lucide-react';
import { Cliente, ChartData } from '../types';

interface DashboardProps {
  clientes: Cliente[];
  chartData: ChartData[];
}

const Dashboard: React.FC<DashboardProps> = React.memo(({ clientes, chartData }) => {
  // Memoize heavy statistical reductions into a single pass or useMemo hook to avoid recalculating on re-render.
  const stats = useMemo(() => {
    if (clientes.length === 0) {
      return [
        { title: 'Mora Total', value: '0 Bs', icon: <TrendingUp className="text-msc-dark" />, sub: 'Deuda acumulada' },
        { title: 'Clientes en Mora', value: 0, icon: <Users className="text-msc-dark" />, sub: 'Total deudores' },
        { title: 'Casos Críticos', value: 0, icon: <AlertTriangle className="text-red-600" />, sub: '+60 días de mora' },
        { title: 'Promedio Días', value: 0, icon: <Clock className="text-msc-dark" />, sub: 'Días de atraso' },
      ];
    }

    let totalMonto = 0;
    let criticalCount = 0;
    let totalMoraDays = 0;

    for (let i = 0; i < clientes.length; i++) {
      const c = clientes[i];
      totalMonto += c.monto;
      totalMoraDays += c.diasMora;
      if (c.diasMora >= 60) {
        criticalCount++;
      }
    }

    const avgMoraDays = Math.round(totalMoraDays / clientes.length);

    return [
      { title: 'Mora Total', value: `${totalMonto.toLocaleString()} Bs`, icon: <TrendingUp className="text-msc-dark" />, sub: 'Deuda acumulada' },
      { title: 'Clientes en Mora', value: clientes.length, icon: <Users className="text-msc-dark" />, sub: 'Total deudores' },
      { title: 'Casos Críticos', value: criticalCount, icon: <AlertTriangle className="text-red-600" />, sub: '+60 días de mora' },
      { title: 'Promedio Días', value: avgMoraDays, icon: <Clock className="text-msc-dark" />, sub: 'Días de atraso' },
    ];
  }, [clientes]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="card flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-bold mb-6">Evolución de Mora por Mes</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="mes"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="monto" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                  {chartData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#155B3A' : '#C7A15A'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-4">Últimos Clientes en Mora</h3>
          <div className="space-y-4">
            {clientes.slice(0, 3).map((cliente) => (
              <div key={cliente.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div>
                  <p className="font-semibold text-sm">{cliente.nombre}</p>
                  <p className="text-xs text-slate-500">CI: {cliente.ci}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-msc-dark">{cliente.monto.toLocaleString()} Bs</p>
                  <p className="text-[10px] text-slate-400">{cliente.diasMora} días</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-sm font-semibold text-msc-dark hover:underline">
            Ver todos los clientes
          </button>
        </div>
      </div>
    </div>
  );
});

export default Dashboard;
