import { FC } from 'react';
import { X, User, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { Cliente } from '../types';

interface GestionModalProps {
  cliente: Cliente | null;
  isOpen: boolean;
  onClose: () => void;
}

const GestionModal: FC<GestionModalProps> = ({ cliente, isOpen, onClose }) => {
  if (!isOpen || !cliente) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-msc-dark p-4 flex justify-between items-center text-white">
          <h3 className="font-bold">Gestionar Cliente</h3>
          <button onClick={onClose} className="hover:bg-msc-green p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Cliente</p>
              <div className="flex items-center gap-2">
                <User size={16} className="text-msc-gold" />
                <p className="text-sm font-semibold">{cliente.nombre}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">CI</p>
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-msc-gold" />
                <p className="text-sm font-semibold">{cliente.ci}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Monto</p>
              <p className="text-sm font-bold text-msc-dark">{cliente.monto.toLocaleString()} Bs</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Días Mora</p>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-orange-500" />
                <p className="text-sm font-bold">{cliente.diasMora} días</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Acción a realizar</label>
            <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-msc-green focus:border-transparent outline-none">
              <option value="">Seleccione una acción...</option>
              <option value="llamada">Llamada telefónica</option>
              <option value="notificacion">Notificación escrita</option>
              <option value="reestructura">Reestructuración de deuda</option>
              <option value="legal">Acción legal</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Observaciones (Opcional)</label>
            <textarea
              className="w-full border border-slate-200 rounded-lg p-2.5 text-sm h-24 focus:ring-2 focus:ring-msc-green focus:border-transparent outline-none resize-none"
              placeholder="Detalles de la gestión..."
            ></textarea>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                alert('Gestión registrada correctamente');
                onClose();
              }}
              className="flex-1 px-4 py-2.5 bg-msc-dark text-white rounded-lg font-semibold hover:bg-msc-green transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              Registrar Gestión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionModal;
