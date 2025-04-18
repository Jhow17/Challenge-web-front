import React, { useState } from 'react';

function AddNotification({ onAddNotificationSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [patientName, setPatientName] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');

  const showPatientInput = status === 'ocupado' || status === 'reservado';

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
            <h5 className="modal-title" id="formModalLabel">
              Nova Notificação
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <label className="form-label">Leito/Quarto:</label>
              <input
                type="text"
                className="form-control rounded-4"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <label className="form-label mt-3">Descrição:</label>
              <textarea
                className="form-control rounded-4"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={3}
              ></textarea>

              <label className="form-label mt-3">Status:</label>
              <select
                className="form-select rounded-pill"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="" disabled>
                  Selecione o status:
                </option>
                <option value="disponivel">Disponível</option>
                <option value="ocupado">Ocupado</option>
                <option value="limpeza">Em limpeza</option>
                <option value="manutencao">Manutenção</option>
                <option value="reservado">Reservado</option>
              </select>

              {showPatientInput && (
                <>
                  <label className="form-label mt-2">Nome do Paciente:</label>
                  <input
                    type="text"
                    className="form-control rounded-4"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </>
              )}

              <label className="form-label mt-3">Prioridade:</label>
              <select
                className="form-select rounded-pill"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option value="" disabled>
                  Selecione a prioridade:
                </option>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>

              <label className='form-label mt-3'>Responsável:</label>
              <input
               type="text"
               className='form-control rounded-4'
               value={responsible}
               onChange={(event) => setResponsible(event.target.value)}
              >
              </input>

              <button type="submit"
                onClick={() => {
                if(!title.trim() || !description.trim() || !status.trim() || !responsible.trim() || !priority.trim()) {
                    return alert("Preencha todos os campos!");
                }
               
                onAddNotificationSubmit(title, description, status, patientName, responsible, priority);
                setTitle("");
                setDescription("");
                setStatus("");
                setPatientName("");
                setResponsible("");
                setPriority("");
              }}

              className="btn btn-success w-100 mt-3">Adicionar</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNotification;