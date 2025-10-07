import { error } from "console";
import express from "express";
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

import router from "./whatsapp.js";
const prisma = new PrismaClient();

const app = express()

const PORT = process.env.PORT || 5001; // pega a porta do Render ou 5001 daqui

app.use(express.json())
app.use(cors())

app.use('/api/whatsapp', router);

app.get('/quartos', async (req, res) => {
    try{
        const quartos = await prisma.quarto.findMany()
        res.json(quartos)
    }catch(error){
        console.log('Erro ao listar quartos', error)
        res.status(500).json({error: 'Erro interno ao listar quartos'})
    }
})

app.get('/livres', async(req,res) => {
  try{
    const quartosLivres = await prisma.quarto.findMany({
      where : {
        status : "livre"

      }
    })
    res.json(quartosLivres)

  }catch(e){
    console.log('Erro ao buscar quartos livres', e)
    res.status(500).json({'erro' : e.message})

  }
})

app.post('/quartos', async(req, res) => {
    try{
        const {numeroQuarto, leito, responsavel, status} = req.body

        if (numeroQuarto === undefined || leito === undefined || !status){
            return res.status(400).json({error: 'Campos obrigatórios'})
        }
        const novoQuarto = await prisma.quarto.create({
            data: {
                numeroQuarto: parseInt(numeroQuarto),
                leito: parseInt(leito),
                responsavel: responsavel, 
                status: status
            },
        })
        res.status(201).json(novoQuarto)
    }catch(error){
        console.error('Erro ao criar quarto')
        res.status(500).json({ error: 'Erro interno ao deletar o quarto.' });

    }
})

app.put('/quartos/numero/:numero/status/:novoStatus', async (req, res) => {
    try {
        const numeroDoQuarto  = parseInt(req.params.numero, 10);
        const novoStatus  = req.params.novoStatus; 

        if (isNaN(numeroDoQuarto)){
          return res.status(400).json({error: 'Esee qurto é invalido'})
        }
        if (novoStatus === undefined) {
            return res.status(400).json({ error: 'O campo "status" é obrigatório no corpo da requisição.' });
        }

        const quartoAtualizado = await prisma.quarto.update({
            where: { numeroQuarto: numeroDoQuarto }, 
            data: { status: novoStatus },  
        });

        res.json(quartoAtualizado); 
    } catch (error) {
        console.error(`Erro ao atualizar status do quarto nº ${req.params.numero}:`, error);
       
        res.status(500).json({ error: 'Erro interno ao atualizar o status do quarto.' });
    }
});

app.delete('/quartos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.quarto.delete({
      where: { id: String(id) },
    });
    res.status(200).json({ message: 'Quarto deletado com sucesso.' });
  } catch (error) {
    console.error("Erro ao deletar quarto:", error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Quarto não encontrado para deleção.' });
    } else if (error.code === 'P2023' || error.message.includes("Malformed ObjectID")) {
        return res.status(400).json({ error: 'ID do quarto inválido.' });
    }
    res.status(500).json({ error: 'Erro interno ao deletar o quarto.' });
  }
})

app.post('/notificacoes', async (req, res) => {
    try {
        const { title, description, status, priority, patientName, responsible, isCompleted } = req.body;
        
        const novaNotificacao = await prisma.notificacao.create({
            data: {
                title,
                description,
                status,
                priority,
                patientName,
                responsible,
                isCompleted: isCompleted ?? false, // Garante que isCompleted seja false se não for enviado
            },
        });
        res.status(201).json(novaNotificacao);
    } catch (error) {
        console.error('Erro ao criar notificação:', error);
        res.status(500).json({ error: 'Erro interno ao criar a notificação.' });
    }
});

app.get('/notificacoes', async (req, res) => {
    try {
        const notificacoes = await prisma.notificacao.findMany();
        res.json(notificacoes);
    } catch (error) {
        console.error('Erro ao listar notificações:', error);
        res.status(500).json({ error: 'Erro interno ao listar notificações.' });
    }
});

app.put('/notificacoes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority, patientName, responsible, isCompleted } = req.body;
        
        const notificacaoAtualizada = await prisma.notificacao.update({
            where: { id: String(id) },
            data: {
                title,
                description,
                status,
                priority,
                patientName,
                responsible,
                isCompleted,
            },
        });
        res.json(notificacaoAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar notificação:', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Notificação não encontrada.' });
        }
        res.status(500).json({ error: 'Erro interno ao atualizar a notificação.' });
    }
});

app.delete('/notificacoes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.notificacao.delete({
            where: { id: String(id) },
        });
        res.status(200).json({ message: 'Notificação deletada com sucesso.' });
    } catch (error) {
        console.error("Erro ao deletar notificação:", error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Notificação não encontrada para deleção.' });
        }
        res.status(500).json({ error: 'Erro interno ao deletar a notificação.' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

