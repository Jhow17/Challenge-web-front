import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.css';
import  React, {useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications")) || []);
  const [freeRooms, setRooms] = useState([]);

  const fetchFreeRooms = async () => {
        try {
            const response = await api.get('/livres');
            setRooms(response.data);
        } catch (error) {
            console.error('Erro ao buscar quartos livres:', error);
        }
    };

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
    fetchFreeRooms() 
    
  }, [notifications])

  async function onDeleteClick(notification) {
   
    const newNotifications = notifications.filter((n) => n.id !== notification.id);
    setNotifications(newNotifications);

    try {
        const numeroQuarto = notification.title.split('/')[1]?.trim();
        if (numeroQuarto) {
            const response = await api.put(`/quartos/numero/${numeroQuarto}/status/livre`);
            console.log('Status do quarto atualizado com sucesso:', response.data);
        }
        fetchFreeRooms();
    } catch (error) {
        console.error('Falha ao atualizar o status do quarto:', error);
    }
}

  async function onAddNotificationSubmit(title, description, status, patientName, responsible, priority) {
    const newNotification = {
      id: uuidv4(),
      title,
      description,
      status,
      priority,
      patientName,
      responsible,
      isCompleted: false,
    };
    setNotifications([...notifications, newNotification]);

        try {
          console.log("Enviando notificação para WhatsApp via backend:", newNotification);
           const responseWhatsapp = await api.post('/api/whatsapp/send-single', {
        notification: newNotification
      });
          console.log('Resposta do envio de WhatsApp:', responseWhatsapp.data.message);

         let numeroDoQuartoParaAtualizar;
          if (newNotification.title && newNotification.title.includes('/')) {
        numeroDoQuartoParaAtualizar = newNotification.title.split('/')[1]?.trim();
      } else {
        numeroDoQuartoParaAtualizar = newNotification.title?.trim();
      }
      
       const novoStatusDoQuarto = newNotification.status;


      if (numeroDoQuartoParaAtualizar && novoStatusDoQuarto){
        console.log(`Atuaizando o Quarto ${numeroDoQuartoParaAtualizar}`)
        const responseAtualizacaoStatus = await api.put(`/quartos/numero/${numeroDoQuartoParaAtualizar}/status/${novoStatusDoQuarto}`)
        console.log('Status do quarto atualizado com sucesso:', responseAtualizacaoStatus.data);
      }
     

    } catch (error) {
      console.error('Falha ao enviar notificação para WhatsApp via backend:', error);
      
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
        <RoomContext.Provider value={{ freeRooms, fetchFreeRooms }}>
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