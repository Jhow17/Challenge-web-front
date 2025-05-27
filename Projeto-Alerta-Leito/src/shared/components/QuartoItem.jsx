import React from "react";

const statusColors = {
  "ocupado": "bg-red-500/50 text-white",
  "livre": "bg-green-500/50 text-white",
  "aguardando limpeza": "bg-blue-500/50 text-white",
  "aguardando manutenção": "bg-purple-500/50 text-white",
};

const QuartoItem = ({ quarto, leito, status, responsavel }) => {
  // Não precisa do toLowerCase() se os status já batem com o objeto
  const statusClass = statusColors[status] 
  console.log(statusClass)

  return (
    <tr className={`${statusClass} p-4 border-b border-black`}>
      <td>{responsavel}</td>
      <td>{quarto}</td>
      <td>{leito}</td>
      <td className="text-center">{status?.toUpperCase()}</td>
    </tr>
  );
};

export default QuartoItem;