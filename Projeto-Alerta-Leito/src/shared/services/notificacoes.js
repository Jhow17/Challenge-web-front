// Vai ser o responsavel por dar um export pra tudo
const notificacoes = () => ([
    {
        id: 1,
        title: 'Notificação 1',
        description: 'Descrição da notificação 1',
        status: 'Pendente',
        priority: 'Alta',
        patientName: 'Paciente 1',
        responsible: 'Responsável 1',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Notificação 2',
        description: 'Descrição da notificação 2',
        status: 'Concluída',
        priority: 'Média',
        patientName: 'Paciente 2',
        responsible: 'Responsável 2',
        isCompleted: true,
    },
]);
export default notificacoes;

