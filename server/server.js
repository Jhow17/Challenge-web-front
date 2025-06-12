import { error } from "console";
import express from "express";
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

import router from "./whatsapp.js";
const prisma = new PrismaClient();

const app = express()

const port = 5001
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

app.put('/quartos/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { status } = req.body; 

        
        if (status === undefined) {
            return res.status(400).json({ error: 'O campo "status" é obrigatório no corpo da requisição.' });
        }

        const quartoAtualizado = await prisma.quarto.update({
            where: { id: String(id) }, 
            data: { status: status },  
        });

        res.json(quartoAtualizado); 
    } catch (error) {
        console.error("Erro ao atualizar status do quarto:", error);
        if (error.code === 'P2025') { 
            return res.status(404).json({ error: 'Quarto não encontrado para atualização.' });
        } else if (error.code === 'P2023' || error.message.includes("Malformed ObjectID")) { 
            return res.status(400).json({ error: 'ID do quarto inválido.' });
        }
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

app.post('/quartos/popular', async (req, res) => {
  const listaDeQuartosExemplo = [
    { quarto: 1, leito: 1, responsavel: 'João', status: 'livre' },
    { quarto: 2, leito: 2, responsavel: 'Maria', status: 'ocupado' },
    { quarto: 3, leito: 1, responsavel: 'Lucas', status: 'aguardando limpeza' },
    { quarto: 4, leito: 2, responsavel: 'Ana', status: 'ocupado' },
    { quarto: 5, leito: 1, responsavel: 'João', status: 'aguardando manutenção' },
    { quarto: 6, leito: 2, responsavel: 'Maria', status: 'livre' },
    { quarto: 7, leito: 1, responsavel: 'Lucas', status: 'ocupado' },
    { quarto: 8, leito: 2, responsavel: 'Ana', status: 'aguardando limpeza' },
    { quarto: 9, leito: 1, responsavel: 'João', status: 'ocupado' },
    { quarto: 10, leito: 2, responsavel: 'Maria', status: 'aguardando manutenção' },
    { quarto: 11, leito: 1, responsavel: 'Lucas', status: 'livre' },
    { quarto: 12, leito: 2, responsavel: 'Ana', status: 'ocupado' },
    { quarto: 13, leito: 1, responsavel: 'João', status: 'aguardando limpeza' },
    { quarto: 14, leito: 2, responsavel: 'Maria', status: 'livre' },
    { quarto: 15, leito: 1, responsavel: 'Lucas', status: 'aguardando manutenção' }
  ];

  try {
    const dadosFormatados = listaDeQuartosExemplo.map(q => ({
      numeroQuarto: q.quarto,
      leito: q.leito,
      responsavel: q.responsavel,
      status: q.status,
    }));
    
    const resultado = await prisma.quarto.createMany({
      data: dadosFormatados,
    });

    res.status(201).json({ message: `${resultado.count} quartos foram adicionados com sucesso.`, data: resultado });
  } catch (error) {
    console.error("Erro ao popular quartos:", error);
    res.status(500).json({ error: 'Erro interno ao popular os quartos.' });
  }
});

app.listen(port, '192.168.0.18', () => {
  console.log(`Servidor rodando na porta ${port}`)
})

