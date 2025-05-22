import React from "react";

const statusColors = {
  "ocupado": "bg-red-500/70 text-white",          
  "livre": "bg-green-500/70 text-white",        
  "aguardando limpeza": "bg-blue-500/70 text-white",   
  "aguardando manutenção": "bg-purple-500/70 text-white", 
};

const QuartoItem = ({ quarto, leito, status, responsavel }) => {
  const statusClass = statusColors[status];

  return (
    <tr className={`border-b`}>
      <td className={`px-4 py-2 ${statusClass}`}>{responsavel}</td>
      <td className={`px-4 py-2 ${statusClass}`}>{quarto}</td>
      <td className={`px-4 py-2 ${statusClass}`}>{leito}</td>
      <td className={`px-4 py-2 text-center ${statusClass}`}>{status?.toUpperCase()}</td>
    </tr>
  );
};

export default QuartoItem;
