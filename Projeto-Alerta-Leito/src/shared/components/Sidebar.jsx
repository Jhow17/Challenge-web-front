import React from "react";
import { Link } from "react-router-dom"; 
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

import logoTemporario from '../images/Logo-Temporario.png';

const Sidebar = () => {
  return (
    <aside className="d-flex sidebar">
      <div
        className="sidebar-menu d-flex flex-column align-items-center flex-shrink-0 p-2 bg-white text-black vh-100 gap-3"
        style={{ minWidth: "150px", maxWidth: "225px", overflowY: "auto" }}
      >
        <img
          src={logoTemporario}
          alt="Logo"
          className="img-fluid mb-5 mt-5"
          style={{ maxWidth: "100px", height: "auto" }}
        />
        <Button />
        <ul className="nav nav-pills flex-column mb-auto gap-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-black">
              <i className="bi bi-house-door me-2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/lista-status" className="nav-link text-black">
              <i className="bi bi-list-task me-2"></i> Lista Status
            </Link>
          </li>
          <li>
            <Link to="/notificacoes" className="nav-link text-black">
              <i className="bi bi-bell-fill me-2"></i> Notificações
            </Link>
          </li>
          <li>
            <Link to="/adm" className="nav-link text-black">
              <i className="bi bi-gear me-2"></i> ADM
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
