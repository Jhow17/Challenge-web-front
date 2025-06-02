import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_DESTINATION_NUMBER = process.env.WHATSAPP_DESTINATION_NUMBER;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;

const headers = {
  "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
  "Content-Type": "application/json"
};

async function enviarNotificacaoFormatada(notificacaoProcessada) {
  if (!WHATSAPP_API_URL || !WHATSAPP_TOKEN || !WHATSAPP_DESTINATION_NUMBER || !WHATSAPP_TEMPLATE_NAME) {
    console.error("Variáveis de ambiente do WhatsApp não configuradas corretamente.");
    return { success: false, error: "Configuração do servidor incompleta para envio de WhatsApp." };
  }
  const payload = {
    "messaging_product": "whatsapp",
    "to": WHATSAPP_DESTINATION_NUMBER,
    "type": "template",
    "template": {
      "name": WHATSAPP_TEMPLATE_NAME,
      "language": { "code": "pt_BR" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": String(notificacaoProcessada.leito) },
            { "type": "text", "text": String(notificacaoProcessada.quarto) },
            { "type": "text", "text": String(notificacaoProcessada.conteudo) }
          ]
        }
      ]
    }
  };
  try {
    console.log("Enviando payload para WhatsApp:", JSON.stringify(payload, null, 2));
    const response = await axios.post(WHATSAPP_API_URL, payload, { headers });
    console.log(`Notificação (L:<span class="math-inline">\{notificacaoProcessada\.leito\}, Q\:</span>{notificacaoProcessada.quarto}) enviada para WhatsApp: Status ${response.status}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Erro ao enviar notificação formatada (L:<span class="math-inline">\{notificacaoProcessada\.leito\}, Q\:</span>{notificacaoProcessada.quarto}):`);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      return { success: false, error: error.response.data, status: error.response.status };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return { success: false, error: "Sem resposta do servidor de WhatsApp." };
    } else {
      console.error("Error setting up request:", error.message);
      return { success: false, error: error.message };
    }
  }
}

export async function enviarNotificacaoIndividualWhatsApp(notificacaoOriginal) {
  if (!notificacaoOriginal) {
    return { success: false, error: "Dados da notificação ausentes." };
  }
  console.log("Processando notificação individual para WhatsApp:", notificacaoOriginal);
  let leito = "N/A";
  let quarto = "N/A";

  if (notificacaoOriginal.title) {
    const partesTitulo = String(notificacaoOriginal.title).split('/');
    if (partesTitulo.length === 2) {
      leito = partesTitulo[0].trim();
      quarto = partesTitulo[1].trim();
    } else if (partesTitulo.length === 1) {
      quarto = notificacaoOriginal.title.trim(); // Ajuste se 'title' for só o leito
    }
  }
  const notificacaoProcessada = {
    leito: leito,
    quarto: quarto,
    conteudo: notificacaoOriginal.description || "Sem descrição"
  };
  return await enviarNotificacaoFormatada(notificacaoProcessada);
}