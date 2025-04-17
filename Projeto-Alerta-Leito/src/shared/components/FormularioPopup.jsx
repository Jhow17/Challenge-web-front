import React from 'react';

const FormularioPopup = () => {
  return (
    <div
      className="modal fade"
      id="formModal"
      tabIndex="-1"
      aria-labelledby="formModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-light rounded-4">
          <div className="modal-header">
            <h5 className="modal-title" id="formModalLabel">Nova Notificação</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Área:</label>
                <select className="form-select rounded-pill">
                  <option>Limpeza</option>
                  <option>Manutenção</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Quarto:</label>
                <select className="form-select rounded-pill">
                  <option>Quarto 01</option>
                  <option>Quarto 02</option>
                  <option>Quarto 03</option>
                  <option>Quarto 04</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Prioridade:</label>
                <select className="form-select rounded-pill">
                  <option>Simples</option>
                  <option>Média</option>
                  <option>Alta</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Observações:</label>
                <textarea className="form-control rounded-4" rows="4"></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioPopup;
