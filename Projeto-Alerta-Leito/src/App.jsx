import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.css';
import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from "react-router-dom";

import Modal from "./shared/components/Modal";
import Dashboard from "./pages/Dashboard";
import ListaStatus from "./pages/ListaStatus";
import Notificacoes from "./pages/Notificacoes";
import Adm from "./pages/Adm";
import AddNotification from "./shared/components/AddNotification";
import NotificationPage from "./pages/NotificationPage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications")) || []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications])

  function onDeleteClick(notificationId) {
    const newNotifications = notifications.filter((notification) => notification.id !== notificationId);
    setNotifications(newNotifications);
  }

  function onAddNotificationSubmit(title, description, status, patientName, responsible, priority) {
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
  }

  return (
    <>
      {/* Modal */}
      <Modal isOpen={openModal} setClose={() => setOpenModal(false)}>
        <AddNotification onAddNotificationSubmit={onAddNotificationSubmit} />
      </Modal>

      {/* Rotas */}
      <div>
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
          <Route path="/adm" element={<Adm />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;