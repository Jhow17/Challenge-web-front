import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutBase = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-column  overflow-hidden">
      {/* Header com botão hamburguer no mobile */}
      <Header onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="d-flex flex-grow-1">
        {/*  (aparece/desaparece) */}
        <div
          className={`d-md-none position-fixed top-0 start-0 bg-white shadow h-100 z-50 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "250px" }}
        >
          <Sidebar />
        </div>

        {/* (sempre vai da pra ver) */}
        <div className="d-none d-md-block bg-white shadow" style={{ width: "250px", height: "100vh" }}>
          <Sidebar />
        </div>

        {/* principal */}
        <div className="flex-grow-1 overflow-auto p-0" style={{marginLeft: "25px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutBase;
