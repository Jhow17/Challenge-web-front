import React from "react";

const statusColors = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 23b5c5b615923c30aef8c37d2336ecf1aca72404
    </tr>
  );
};

export default QuartoItem;
