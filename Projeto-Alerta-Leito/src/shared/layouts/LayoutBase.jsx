import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutBase = ({ children }) => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Linha para o Header */}
      <div className="row">
   
          <Header />

      </div>

      {/* Linha para o corpo principal */}
      <div className="row flex-grow-1">
        {/* Coluna para a Sidebar */}
        <div className="col-2 bg-light">
          <Sidebar />
        </div>

        {/* Coluna para o conteúdo principal */}
        <div className="col-10 p-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutBase;
