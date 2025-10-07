import React, { useContext, useEffect, useState } from 'react';
import NotificacaoPreview from './NotificacaoPreview'
import { RoomContext } from '../../App';


const ListPrevNoti = () => {
    const { notifications } = useContext(RoomContext);
    // aqui ele ta fznd a mesma coisa que na App pegando os dados diretos da local storage para atualizar


return (
    <div className="flex-grow-1 overflow-hidden">
        <div className="mb-3">
            <div className="ml-6 d-flex gap-3">
                <div className="d-flex align-items-center gap-1">
                <span className="rounded-circle d-inline-block" style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#dc3545' }}></span>
                <small>Alta</small>
                </div>
                <div className="d-flex align-items-center gap-1">
                <span className="rounded-circle d-inline-block" style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#6f42c1' }}></span>
                <small>Média</small>
                </div>
                <div className="d-flex align-items-center gap-1">
                <span className="rounded-circle d-inline-block" style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#0d6efd' }}></span>
                <small>Simples</small>
                </div>
            </div>
        </div>
        <ul className="list-group ">
        {notifications.slice(-4).reverse().map((notification) => (
          <li key={notification.id} className="list-group-item p-2">
            <NotificacaoPreview 
              quarto={notification.title} 
              descricao={notification.description}
              prioridade={notification.priority} 
              status={notification.status} 
            />
          </li>
        ))}
      </ul>
    </div>
);
}

export default ListPrevNoti