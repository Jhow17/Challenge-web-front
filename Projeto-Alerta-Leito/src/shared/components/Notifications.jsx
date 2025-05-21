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


  const getStatusClasses = (status) => {
    switch (status?.toLowerCase()) {
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "concluído":
        return "bg-green-100 text-green-800";
      case "cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };


  const getPriorityClasses = (priority) => {
    switch (priority?.toLowerCase()) {
      case "alta":
        return "bg-red-100 text-red-700 border border-red-200";
      case "média":
        return "bg-orange-100 text-orange-700 border border-orange-200";
      case "baixa":
        return "bg-blue-100 text-blue-700 border border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <ul className="space-y-4 p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg shadow-inner">
      {notifications.length === 0 ? (
        <p className="text-center text-gray-600 text-lg py-4">Nenhuma notificação encontrada.</p>
      ) : (
        notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 w-full">
              <h5 className="text-xl font-semibold text-blue-800 md:col-span-2 mb-2 md:mb-0">{notification.title}</h5>

              <p>
                <strong className="font-medium text-gray-800">Status:</strong>{" "}
                <span className={`px-2 py-0.5 rounded-full text-xxs font-semibold uppercase ${getStatusClasses(notification.status)}`}>
                  {notification.status}
                </span>
              </p>
              <p>
                <strong className="font-medium text-gray-800">Prioridade:</strong>{" "}
                <span className={`px-2 py-0.5 rounded-full text-xxs font-semibold uppercase ${getPriorityClasses(notification.priority)}`}>
                  {notification.priority}
                </span>
              </p>
              {notification.patientName && (
                <p>
                  <strong className="font-medium text-gray-800">Paciente:</strong> {notification.patientName}
                </p>
              )}
              <p>
                <strong className="font-medium text-gray-800">Responsável:</strong> {notification.responsible}
              </p>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0 ml-auto flex-shrink-0">
              <button
                onClick={() => onSeeDetailsClick(notification)}
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                title="Ver Detalhes"
              >
                <Info className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDeleteClick(notification.id)}
                className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
