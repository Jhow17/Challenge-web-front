import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.css';
import  React, {useEffect, useState } from "react";

import {  Routes, Route } from "react-router-dom";


import Modal from "./shared/components/Modal";
import Dashboard from "./pages/Dashboard";
import ListaStatus from "./pages/ListaStatus";
import Notificacoes from "./pages/Notificacoes";
import AddNotification from "./shared/components/AddNotification";
import NotificationPage from "./pages/NotificationPage";
import api from "./shared/services/api";

export const RoomContext = React.createContext() ;

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [freeRooms, setRooms] = useState([]);

  const fetchFreeRooms = async () => {
        try {
            const response = await api.get('/livres');
            setRooms(response.data);
        } catch (error) {
            console.error('Erro ao buscar quartos livres:', error);
        }
    };

    const fetchNotifications = async () => {
      try {
          const response = await api.get('/notificacoes');
          setNotifications(response.data);
      } catch (error) {
          console.error('Erro ao buscar notificações do backend:', error);
      }
  };

  useEffect(() => {
    
    fetchFreeRooms() 
    fetchNotifications()
    
  }, [notifications])

  async function onDeleteClick(notification) {
    
    try {
      await api.delete(`/notificacoes/${notification.id}`);
      
      
      const numeroQuarto = notification.title.split('/')[1]?.trim();
      if (numeroQuarto) {
          const response = await api.put(`/quartos/numero/${numeroQuarto}/status/livre`);
          console.log('Status do quarto atualizado com sucesso:', response.data);
          
          
      }

      fetchNotifications();
    } catch (error) {
      
      console.error('Falha na deleção da notificação ou na atualização do quarto:', error);
    }
  }

  async function onAddNotificationSubmit(title, description, status, patientName, responsible, priority) {
    const newNotificationData = {
      title,
      description,
      status,
      priority,
      patientName,
      responsible,
      isCompleted: false,
    };

    try {
      
      const responseDB = await api.post('/notificacoes', newNotificationData);
      const createdNotification = responseDB.data;

      console.log("Enviando notificação via backend:", createdNotification);
      const responseBot = await api.post('/api/whatsapp/send-single', {
        notification: createdNotification 
      });
      console.log('Resposta do envio do Bot:', responseBot.data.message);

      let numeroDoQuartoParaAtualizar;
      if (createdNotification.title && createdNotification.title.includes('/')) {
        numeroDoQuartoParaAtualizar = createdNotification.title.split('/')[0]?.trim();
      } else {
        numeroDoQuartoParaAtualizar = createdNotification.title?.trim();
      }
      
      const novoStatusDoQuarto = createdNotification.status;

      if (numeroDoQuartoParaAtualizar && novoStatusDoQuarto){
        console.log(`Atuaizando o Quarto ${numeroDoQuartoParaAtualizar}`);
        const responseAtualizacaoStatus = await api.put(`/quartos/numero/${numeroDoQuartoParaAtualizar}/status/${novoStatusDoQuarto}`);
        console.log(`O novo Status do quarto : ${novoStatusDoQuarto} e o numero é ${numeroDoQuartoParaAtualizar} `)
        console.log('Status do quarto atualizado com sucesso:', responseAtualizacaoStatus.data);
      }
      
      fetchNotifications();

    } catch (error) {
      console.error('Falha completa no processo de notificação e DB:', error);

      fetchNotifications(); 
    }
  }

  return (
    <>
      {/* Modal */}
      <Modal isOpen={openModal} setClose={() => setOpenModal(false)}>
        <AddNotification onAddNotificationSubmit={onAddNotificationSubmit} />
      </Modal>

      {/* Rotas */}
      <div>
        <RoomContext.Provider value={{ freeRooms, fetchFreeRooms, notifications, fetchNotifications }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lista-status" element={<ListaStatus />} />
          
            <Route 
            path="/notificacoes" 
            element={
              <Notificacoes 
                notifications={notifications}
                onAddNotificationSubmit={onAddNotificationSubmit}
                onDeleteClick={onDeleteClick}
              />
            } 
          />
   
          <Route path="/notification" element={<NotificationPage />} />

          
          
        </Routes>
        </RoomContext.Provider>
      </div>
    </>
  );
}

export default App;