import React, { useState, useContext, useEffect } from 'react';
import { RoomContext } from '../../App';

function AddNotification({ onAddNotificationSubmit }) {
  const { freeRooms, fetchFreeRooms } = useContext(RoomContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [patientName, setPatientName] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');

  const showPatientInput = status === 'ocupado' || status === 'reservado';

  useEffect(() => {
        
        fetchFreeRooms();
    }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim() || !status.trim() || !responsible.trim() || !priority.trim()) {
      return alert('Preencha todos os campos!');
    }

    onAddNotificationSubmit(title, description, status, patientName, responsible, priority);

    setTitle('');
    setDescription('');
    setStatus('');
    setPatientName('');
    setResponsible('');
    setPriority('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Quarto:</label>
            <select
                className="form-control rounded-4"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            >
                <option value="" disabled>Selecione um quarto...</option>
                {freeRooms.map(room => (
                    <option key={room.id} value={`${room.numeroQuarto}/${room.leito}`}>
                        {`Quarto ${room.numeroQuarto}, Leito ${room.leito}`}
                    </option>
                ))}
            </select>

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
            Selecione o Serviço:
          </option>
          <option value="aguardando limpeza">Limpeza</option>
          <option value="aguardando manutencao">Manutenção</option>
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

        <label className="form-label mt-3">Responsável:</label>
        <input
          type="text"
          className="form-control rounded-4"
          value={responsible}
          onChange={(event) => setResponsible(event.target.value)}
        />

        <button type="submit" className="btn btn-success w-100 mt-3">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddNotification;
