import React from 'react';


const NotificacaoPreview = ({ quarto, descricao, prioridade }) => {
  // Define a cor da badge com base na prioridade
  const prioridadeMap = {
    simples: '#0d6efd', // azul (equivalente ao bg-primary)
    media: '#6f42c1',   // roxo (exemplo de bg-purple)
    alta: '#dc3545', 
  };

  return (
    <div>
      <strong className="d-block">QUARTO {quarto}:</strong>
      <span
  className="d-block text-uppercase fw-semibold text-muted"
  style={{ textDecoration: 'underline', textDecorationColor: prioridadeMap[prioridade.toLowerCase()] }}
>
        {descricao}
      </span>
    </div>
  );
};

export default NotificacaoPreview;
