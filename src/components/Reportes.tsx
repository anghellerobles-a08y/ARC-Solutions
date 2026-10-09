import React, { memo } from 'react';
import { Target, BarChart3, ClipboardCheck, CheckCircle2 } from 'lucide-react';

const Reportes: React.FC = memo(() => {
  const metrics = [
    {
      title: 'Eficiencia de Cobranza',
      value: '65%',
      icon: <Target className="text-msc-dark" />,
      color: 'bg-green-50',
      description: 'Meta mensual: 80%'
    },
    {
      title: 'Tasa de Recuperación',
      value: '42%',
      icon: <BarChart3 className="text-msc-dark" />,
      color: 'bg-blue-50',
      description: 'Respecto al mes anterior'
    },
    {
      title: 'Gestiones Realizadas',
      value: '157',
      icon: <ClipboardCheck className="text-msc-dark" />,
      color: 'bg-orange-50',
      description: 'Últimos 30 días'
    },
    {
      title: 'Casos Resueltos',
      value: '68',
      icon: <CheckCircle2 className="text-msc-dark" />,
      color: 'bg-purple-50',
      description: 'En proceso de cierre'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="card flex items-center gap-6">
            <div className={`p-4 rounded-2xl ${metric.color}`}>
              {metric.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{metric.title}</p>
              <h3 className="text-3xl font-black text-slate-800">{metric.value}</h3>
              <p className="text-xs text-slate-400 mt-1">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="text-lg font-bold mb-4">Análisis de Desempeño</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          El reporte actual indica una tendencia positiva en la eficiencia de cobranza, con un incremento del 5% respecto al cierre de mayo.
          Los casos críticos (mayores a 60 días) representan el 15% de la cartera total en mora, concentrándose principalmente en el sector comercial.
        </p>
        <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
          <button className="btn-primary flex items-center gap-2">
            Descargar Reporte PDF Detallado
          </button>
        </div>
      </div>
    </div>
  );
});

Reportes.displayName = 'Reportes';

export default Reportes;
