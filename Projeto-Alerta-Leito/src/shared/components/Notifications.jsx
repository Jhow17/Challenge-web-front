import { Info, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Notifications({ notifications, onDeleteClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(notification) {
      const query = new URLSearchParams();
      query.set("title", notification.title);
      query.set("description", notification.description);
      query.set("status", notification.status);
      query.set("priority", notification.priority);
      query.set("patientName", notification.patientName);
      query.set("responsible", notification.responsible);
      navigate(`/notification?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-start justify-between gap-4 p-3 bg-white rounded-md shadow">
            <h5>{notification.title}</h5> 
            <p><strong>Status:</strong> {notification.status}</p>
            <p><strong>Prioridade:</strong> {notification.priority}</p>
            {notification.patientName && <p><strong>Paciente:</strong> {notification.patientName}</p>}
            <p><strong>Responsável:</strong> {notification.responsible}</p>


            <div className="flex gap-2 ml-auto">
              <button onClick={() => onSeeDetailsClick(notification)} className="p-2 rounded-md">
                <Info />
              </button>
              <button onClick={() => onDeleteClick(notification.id)} className="p-2 rounded-md ">
                <Trash2 />
              </button>
            </div> 
            </li>
          ))}
        </ul>
    );
}

export default Notifications;
