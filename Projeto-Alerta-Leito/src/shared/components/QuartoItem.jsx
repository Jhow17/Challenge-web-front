import React from "react";

const statusColors = {
  "ocupado": "bg-red-500/50 text-white",
  "livre": "bg-green-500/50 text-white",
  "aguardando limpeza": "bg-blue-500/50 text-white",
  "aguardando manutenção": "bg-purple-500/50 text-white",
  "default": "bg-gray-300/50 text-gray-800" // Exemplo de classe default do Tailwind
};

const QuartoItem = ({ quarto, leito, status, responsavel }) => {
  const statusNormalizado = status ? status.toLowerCase() : "default";
  const classeDaLinhaBase = "p-4 border-b border-black"; // Suas classes base para a linha
  const classeDeStatusParaLinha = statusColors[statusNormalizado] || statusColors["default"];

  // Log para depuração
  // console.log("Status Original:", status);
  // console.log("Status Normalizado:", statusNormalizado);
  // console.log("Classe de Status para Linha:", classeDeStatusParaLinha);

  return (
    <tr className={`${classeDaLinhaBase} ${classeDeStatusParaLinha}`}>
      {/* Adicione classes de padding/texto se desejar, como nos <th> */}
      <td className="px-4 py-2">{responsavel}</td>
      <td className="px-4 py-2">{quarto}</td>
      <td className="px-4 py-2">{leito}</td>
      {/* A cor do texto do status virá da classe da linha, mas você pode querer um estilo específico aqui */}
      <td className="text-center px-4 py-2"> 
        {status ? status.toUpperCase() : 'N/A'}
      </td>
    </tr>
  );
};

export default QuartoItem;