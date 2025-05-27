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
    <ul className="space-y-4 p-6 bg-slate-100 rounded-lg shadow-inner">
      {notifications.length === 0 ? (
        <p className="text-center text-gray-600 text-lg py-2">Nenhuma notificação encontrada.</p>
      ) : (
        notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-2 bg-white rounded-lg shadow"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 w-full">
              <h5 className="text-lg font-semibold text-gray-800 md:col-span-2 mb-2">{notification.title}</h5>

              <p><strong>Status:</strong> {notification.status}</p>
              <p><strong>Prioridade:</strong> {notification.priority}</p>
              {notification.patientName && (
                <p><strong>Paciente:</strong> {notification.patientName}</p>
              )}
              <p><strong>Responsável:</strong> {notification.responsible}</p>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0 ml-auto">
              <button
                onClick={() => onSeeDetailsClick(notification)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                title="Ver Detalhes"
              >
                <Info className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDeleteClick(notification.id)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                title="Excluir Notificação"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default Notifications;
