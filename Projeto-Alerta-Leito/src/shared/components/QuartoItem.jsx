import React from "react";

const statusColors = {
  "ocupado": "danger",
  "aguardando limpeza": "warning",
  "aguardando manutenção": "info",
  "pronto para uso": "success",
};

const QuartoItem = ({ paciente, quarto, leito, status }) => {
  const statusClass = statusColors[status.toLowerCase()] || "text-secondary";

  return (
    <tr className={`table-${statusClass}`}>
      <td>{paciente}</td>
      <td>{quarto}</td>
      <td>{leito}</td>
      <td >{status?.toUpperCase()}</td>
    </tr>
  );
};

export default QuartoItem;