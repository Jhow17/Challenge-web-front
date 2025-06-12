import React from "react";
import { User, BedDouble, Clock } from 'lucide-react'; 

const statusStyles = {
  "ocupado": "bg-red-500/50 text-white",
  "livre": "bg-green-500/50 text-white",
  "aguardando limpeza": "bg-blue-500/50 text-white",
  "aguardando manutenção": "bg-purple-500/50 text-white",
  "default": "bg-gray-300/50 text-gray-800" 
};

const formatarHora = (isoString) => {
  if (!isoString) return 'N/A';
  const data = new Date(isoString);
  return data.toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
};

const QuartoItem = ({ quarto, leito, status, responsavel,hora }) => {
   const statusNormalizado = status ? status.toLowerCase() : "default";
    const classeDeStatus = statusStyles[statusNormalizado] || statusStyles["default"];



  return (
    <div className={` rounded-lg shadow-md border-l-4 ${classeDeStatus} block`}>
       <div className="flex flex-column justify-between items-center mb-4">
        <h5 className="font-bold">Quarto {quarto}</h5>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${classeDeStatus}`}>
          {status ? status.toUpperCase() : 'N/A'}
        </span>
        <div className="space-y-2 text-sm text-white">
        <div className="flex items-center gap-2">
          <User size={16} className="text-white" />
          <span>{responsavel || 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2">
          <BedDouble size={16} className="text-white" />
          <span>Leito: {leito}</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Clock size={16} className="text-white" />
          <span>{formatarHora(hora)}</span>
        </div>
      </div>
       </div>
    </div>
  );
};

export default QuartoItem;