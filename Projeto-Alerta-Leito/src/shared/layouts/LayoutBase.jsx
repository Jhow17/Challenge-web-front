import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutBase = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100 layout-container">
      
      <div className="row">
        <Header/>
      </div>

      <div className="row">

        <div className="col-2">
          <Sidebar/>
        </div>

        <div className="col-10">
          {children}
        </div>
  
      </div>

    </div>
  );
};

export default LayoutBase;
