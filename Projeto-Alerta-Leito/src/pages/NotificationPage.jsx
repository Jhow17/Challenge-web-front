import { useSearchParams } from "react-router-dom";

function NotificationPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const status = searchParams.get("status");
  const patientName = searchParams.get("patientName");
  const responsible = searchParams.get("responsible");
  const priority = searchParams.get("priority");

  return (
    <div className="h-screen w-screen bg-gray-100 p-8">
        <h1 className="text-center">Detalhes da notificação</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl p-3 rounded-md font-bold mb-2 inline-block">{title}</h1>
        <p className="mb-2"><strong>Descrição:</strong> {description}</p>
        <p className="mb-2"><strong>Status:</strong> {status}</p>
        {patientName && <p className="mb-2"><strong>Paciente:</strong> {patientName}</p>}
        <p className="mb-2"><strong>Responsável:</strong> {responsible}</p>
        <p className="mb-2"><strong>Prioridade:</strong> {priority}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white !rounded-md hover:bg-blue-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

export default NotificationPage;
