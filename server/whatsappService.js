import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function enviarNotificacaoTelegram(notificacaoProcessada) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error("Variáveis de ambiente do Telegram não configuradas corretamente.");
        return { success: false, error: "Configuração do servidor incompleta para envio de Telegram." };
    }

    const message = `Alerta de Serviço
Uma nova tarefa foi solicitada com os seguintes detalhes:
- Quarto: ${notificacaoProcessada.quarto}
- Cama: ${notificacaoProcessada.cama}
- Descrição da Tarefa: ${notificacaoProcessada.descricao}
Por favor, proceder com o atendimento.`;

    const payload = {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
    };

    try {
        console.log("Enviando mensagem para o Telegram:", payload);
        const response = await axios.post(TELEGRAM_API_URL, payload);
        console.log(`Notificação enviada para o Telegram: Status ${response.status}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(`Erro ao enviar notificação para o Telegram:`);
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
            return { success: false, error: error.response.data, status: error.response.status };
        } else if (error.request) {
            console.error("Sem resposta do servidor do Telegram.");
            return { success: false, error: "Sem resposta do servidor do Telegram." };
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
            return { success: false, error: error.message };
        }
    }
}


export async function enviarNotificacaoIndividualWhatsApp(notificacaoOriginal) {
    if (!notificacaoOriginal) {
        return { success: false, error: "Dados da notificação ausentes." };
    }
    console.log("Processando notificação individual para Telegram:", notificacaoOriginal);
    let leito = "N/A";
    let quarto = "N/A";

    if (notificacaoOriginal.title) {
        const partesTitulo = String(notificacaoOriginal.title).split('/');
        if (partesTitulo.length === 2) {
            leito = partesTitulo[0].trim();
            quarto = partesTitulo[1].trim();
        } else if (partesTitulo.length === 1) {
            quarto = notificacaoOriginal.title.trim();
        }
    }
    const notificacaoProcessada = {
        cama: leito,
        quarto: quarto,
        descricao: notificacaoOriginal.description || "Sem descrição"
    };
    return await enviarNotificacaoTelegram(notificacaoProcessada);
}