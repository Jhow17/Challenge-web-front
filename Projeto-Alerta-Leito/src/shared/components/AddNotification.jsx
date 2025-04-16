import { useState } from "react"


function AddNotification({ onAddNotificationSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [datetime, setDatetime] = useState('');
    const [patientName, setPatientName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');


    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col">
            <input type="text"
            placeholder="Digite o leito/quarto"
            className="border border-slate-300 px-4 py-2 rounded-md" />
        </div>
    )
      
}

export default AddNotification;