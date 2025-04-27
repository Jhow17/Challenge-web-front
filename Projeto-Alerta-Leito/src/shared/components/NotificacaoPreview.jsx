import React from 'react';

const NotificacaoPreview = ({ quarto, descricao, prioridade, status }) => {
  const prioridadeMap = {
    simples: '#0d6efd', // azul
    media: '#6f42c1',   // roxo
    alta: '#dc3545',    // vermelho
  };

  const prioridadeCor = prioridadeMap[prioridade.toLowerCase()] || '#6c757d'; // fallback cinza

  return (
    <div className="toast show mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <span
          className="rounded-circle me-2 d-inline-block"
          style={{
            width: '0.8rem',
            height: '0.8rem',
            backgroundColor: prioridadeCor,
          }}
        ></span>
        <strong className="me-auto">Quarto {quarto}</strong>
        <small className="text-muted">{status}</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body text-muted text-uppercase ">
        {descricao}
      </div>
    </div>
  );
};

export default NotificacaoPreview;

