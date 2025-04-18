import { useState } from "react"


function AddNotification({ onAddNotificationSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [patientName, setPatientName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');


    return (
        <div className="max-w-2xl mx-auto space-y-4 p-6 bg-slate-200 rounded-md flex flex-col mt-3">
            <input type="text"
            placeholder="Digite o leito/quarto:"
            className="border border-black font-medium bg-white mt-3 px-4 py-2 rounded-md" 
            value={title}
            onChange={(event) => setTitle(event.target.value)} ></input>
            
            <textarea type="text"
            placeholder="Digite a descrição:"
            className="border border-black font-medium bg-white mt-3 px-4 py-2 rounded-md"
            value={description}
            onChange={(event) => setDescription(event.target.value)} ></textarea>

            <select 
            className="border border-black bg-white font-medium mt-3 px-4 py-2 rounded-md"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            >
                <option value="" disabled>Selecione o status:</option>
                <option value="disponivel">Disponível</option>
                <option value="ocupado">Ocupado</option>
                <option value="limpeza">Em limpeza</option>
                <option value="manutencao">Manutenção</option>
                <option value="reservado">Reservado</option>
            </select>

            <input type="text"
            placeholder="Digite o nome do paciente:"
            className="border border-black font-medium bg-white mt-3 px-4 py-2 rounded-md"
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)} ></input>

            <input type="text"
            placeholder="Digite o nome do responsável:"
            className="border border-black font-medium bg-white mt-3 px-4 py-2 rounded-md"
            value={responsible}
            onChange={(event) => setResponsible(event.target.value)} ></input>

            <select 
            className="border border-black font-medium bg-white mt-3 px-4 py-2 rounded-md"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            >
                <option value="" disabled>Selecione a prioridade:</option>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
            </select>
            <button 
            onClick={() => {
                if(!title.trim() || !description.trim() || !status.trim() || !patientName.trim() || !responsible.trim() || !priority.trim()) {
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
                    
            className="bg-slate-500 text-white px-4 py-2 mt-3 font-medium !rounded-md w-2/3 self-center">Adicionar</button>
            
        </div>
    )
      
}

export default AddNotification;