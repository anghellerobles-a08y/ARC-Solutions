import React, { useState, useMemo } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { Cliente } from '../types';
import GestionModal from './GestionModal';

interface ClientesTableProps {
  clientes: Cliente[];
}

const ClientesTable: React.FC<ClientesTableProps> = ({ clientes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoize filtered results to avoid re-filtering on every render unless search term or data changes
  const filteredClientes = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return clientes.filter(c =>
      c.nombre.toLowerCase().includes(term) ||
      c.ci.includes(searchTerm)
    );
  }, [clientes, searchTerm]);

  const getStatusBadge = (estado: Cliente['estado']) => {
    switch (estado) {
      case 'critical': return <span className="badge-red">Crítico</span>;
      case 'warning': return <span className="badge-orange">Alerta</span>;
      case 'normal': return <span className="badge-green">Normal</span>;
    }
  };

  const handleGestionar = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre o CI..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-msc-green focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition-colors">
            <Filter size={18} />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition-colors">
            <Download size={18} />
            Exportar
          </button>
        </div>
      </div>

      <div className="card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-bottom border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CI</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Monto Adeudado</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Días en Mora</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredClientes.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">{cliente.nombre}</td>
                  <td className="px-6 py-4 text-slate-600">{cliente.ci}</td>
                  <td className="px-6 py-4 font-bold text-msc-dark">{cliente.monto.toLocaleString()} Bs</td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-600">{cliente.diasMora} días</span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(cliente.estado)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleGestionar(cliente)}
                      className="text-msc-dark hover:text-msc-green font-bold text-sm underline flex items-center gap-1"
                    >
                      Gestionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClientes.length === 0 && (
            <div className="py-12 text-center text-slate-400 font-medium">
              No se encontraron clientes con esos criterios
            </div>
          )}
        </div>
      </div>

      <GestionModal
        isOpen={isModalOpen}
        cliente={selectedCliente}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClientesTable;
