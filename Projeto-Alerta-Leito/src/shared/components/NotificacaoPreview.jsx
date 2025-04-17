import React from 'react';


const NotificacaoPreview = ({ quarto, descricao, prioridade }) => {
  // Define a cor da badge com base na prioridade
  const prioridadeMap = {
    simples: '#0d6efd', // azul (equivalente ao bg-primary)
    media: '#6f42c1',   // roxo (exemplo de bg-purple)
    alta: '#dc3545', 
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <strong className="d-block">QUARTO {quarto}:</strong>
      <span
    className="rounded-circle d-inline-block "
    style={{
      width: '0.8rem',
      height: '0.8rem',
      backgroundColor: prioridadeMap[prioridade.toLowerCase()],
    }}
  />
  <span className="text-uppercase fw-semibold text-muted">{descricao}</span>

    </div>
  );
};

export default NotificacaoPreview;
