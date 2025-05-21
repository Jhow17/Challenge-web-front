import React, { useState } from "react";
import LayoutBase from "../shared/layouts/LayoutBase";
import AddNotification from "../shared/components/AddNotification";
import Modal from "../shared/components/Modal";
import Notifications from "../shared/components/Notifications";
import FiltroPersona from "../shared/components/FiltroPersona";

const Notificacoes = ({ notifications, onAddNotificationSubmit, onDeleteClick }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <LayoutBase>
      <div className="p-4">
        <button onClick={() => setOpenModal(true)} className="btn btn-primary mb-4">
          Nova Notificação
        </button>
        <FiltroPersona/>

        <Modal isOpen={openModal} setClose={() => setOpenModal(false)}>
          <AddNotification onAddNotificationSubmit={onAddNotificationSubmit} />
        </Modal>

        <Notifications 
          notifications={notifications}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </LayoutBase>
  );
};

export default Notificacoes;