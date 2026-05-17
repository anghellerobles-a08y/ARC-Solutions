export interface Cliente {
  id: number;
  nombre: string;
  ci: string;
  monto: number;
  diasMora: number;
  estado: 'normal' | 'warning' | 'critical';
}

export interface ChartData {
  mes: string;
  monto: number;
}
