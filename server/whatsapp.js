import express from 'express';
import { enviarNotificacaoIndividualWhatsApp } from './whatsappService.js';

const router = express.Router();

router.post('/send-single', async (req, res) => {
  const notificacaoParaEnviar = req.body.notification;

  if (!notificacaoParaEnviar || typeof notificacaoParaEnviar !== 'object' || Object.keys(notificacaoParaEnviar).length === 0) {
    return res.status(400).json({ message: "Nenhuma notificação fornecida ou formato inválido." });
  }

  try {
    const resultadoEnvio = await enviarNotificacaoIndividualWhatsApp(notificacaoParaEnviar);
    if (resultadoEnvio.success) {
      res.status(200).json({ message: "Notificação encaminhada para WhatsApp.", details: resultadoEnvio.data });
    } else {
      res.status(resultadoEnvio.status || 500).json({
        message: "Falha ao enviar notificação para WhatsApp.",
        details: resultadoEnvio.error
      });
    }
  } catch (error) {
    console.error("Erro crítico na rota /api/whatsapp/send-single:", error);
    res.status(500).json({ message: "Erro interno ao processar notificação para WhatsApp.", error: error.message });
  }
});

export default router;