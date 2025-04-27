import React from "react";

const statusColors = {
  "ocupado": "danger",
  "aguardando limpeza": "warning",
  "aguardando manutenção": "info",
  "pronto para uso": "success",
};

const QuartoItem = ({quarto, leito, status,responsavel}) => {
  const statusClass = statusColors[status.toLowerCase()] || "text-secondary";

  return (
    <tr className={`table-${statusClass}`}>
      <td>{responsavel}</td>
      <td>{quarto}</td>
      <td>{leito}</td>
      <td className="text-center" >{status?.toUpperCase()}</td>
    </tr>
  );
};

export default QuartoItem;