import React from "react";
import LayoutBase from "../shared/layouts/LayoutBase";
import Button from "../shared/components/Button";
import GraficoDonut from "../shared/components/GraficoDonut";
import ListPrevNoti from "../shared/components/ListPrevNoti";



const Dashboard = () => {
  return (

  <LayoutBase>
  <div className="container-fluid">
    <div className="container d-grid vh-100 g-2 ">
      {/* Linha para o botão no canto superior direito */}
      <div className="row d-flex justify-content-end align-items-center p-2 ">
          <Button />
      </div>

      {/* Linha para os cards lado a lado */}
      <div className="row  d-flex justify-content-around align-items-start">
        <div className="col-auto">
          <div className="card mb-3 text-center bg-success text-white" style={{ minWidth: "14rem" }}>
            <div className="card-header fs-6 text">LIVRES</div>
            <div className="card-body">
              <h5 className="card-title fs-5 text">14</h5>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="card text-bg-warning mb-3 text-white text-center" style={{ minWidth: "14rem" }}>
            <div className="card-header fs-6 text ">DESOCUPANDO</div>
            <div className="card-body">
              <h5 className="card-title fs-5 text">27</h5>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="card bg-danger text-white mb-3 text-center " style={{ minWidth: "14rem" }}>
            <div className="card-header fs-6 text">OCUPADOS</div>
            <div className="card-body">
              <h5 className="card-title fs-5 text">30</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row  d-flex justify-content-center">
        <div className="col-8 text-center">
        <h4 className="text-center mb-3">Status dos Leitos</h4>
          <GraficoDonut/>
        </div>
        <div className="col d-flex align-items-center flex-column">
          <h4>Notificações</h4>
          <ListPrevNoti />

        </div>
        

      </div>
    </div>
  </div>
</LayoutBase>



  )
  
};

export default Dashboard;
