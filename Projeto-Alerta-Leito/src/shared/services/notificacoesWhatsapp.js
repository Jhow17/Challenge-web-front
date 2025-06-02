import axios from 'axios';

const notificacoes = [
  { "leito": "04", "quarto": "02", "conteudo": "Limpeza Básica" },
  { "leito": "05", "quarto": "03", "conteudo": "Manutenção Elétrica" },
  { "leito": "06", "quarto": "01", "conteudo": "Higienização Rápida" }
];

// futuramente guardar em variavel de ambiente
const url = "https://graph.facebook.com/v19.0/651007734761028/messages";

const token = "EAAYmNQG3Sn8BO9WnO95yIM0f2yIlwNP6EdUO6d0JCs7IYZAzgEPBVlhBZBqfxZAiKgp3ny9RbFUtDq5rXwWOFbRtmdXl0sB6GZCoouel1BZBLrIGvAzarNuPj8VvdUUCfHqPwpT81ZBZAkfrKChEWcaF4v7RW4VPZCiOdxXlJ8CEFPKjpOCI2kqbZAEGK2zmZB4iuyu0Yrd46lO50ue6ZAU3rl8GuwUmZByJ4OKevoaS3D0k";
const numero_destino = "5511942814851"; 
const nome_modelo = "notificacao_alerta_leitos"; 


const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
};


async function enviarNotificacao(notificacao) {

  const payload = {
    "messaging_product": "whatsapp",
    "to": numero_destino,
    "type": "template",
    "template": {
      "name": nome_modelo,
      "language": { "code": "pt_BR" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": notificacao.leito },
            { "type": "text", "text": notificacao.quarto },
            { "type": "text", "text": notificacao.conteudo }
          ]
        }
      ]
    }
  };

  try {
    // Faz a requisição POST usando axios

    const response = await axios.post(url, payload, { headers: headers });


    console.log(`Notificação para leito ${notificacao.leito}, quarto ${notificacao.quarto}:`);
    console.log("Status:", response.status); 
    console.log("Resposta:", response.data); 
    return response.data; 
  } catch (error) {
 
    console.error(`Erro ao enviar notificação para leito ${notificacao.leito}, quarto ${notificacao.quarto}:`);
    if (error.response) {
   
      console.error("Status do erro:", error.response.status);
      console.error("Dados do erro:", error.response.data);
    } else if (error.request) {
      
      console.error("Sem resposta do servidor:", error.request);
    } else {

      console.error("Erro ao configurar requisição:", error.message);
    }
    return null; 
  }
}


async function enviarTodasNotificacoes() {
  console.log("Iniciando o envio de notificações...");
  for (const notificacao of notificacoes) {
    await enviarNotificacao(notificacao);
   
  }
  console.log("Todas as notificações foram processadas.");
}


enviarTodasNotificacoes();


