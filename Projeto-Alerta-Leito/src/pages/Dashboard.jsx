import React, { useEffect, useState } from "react";
import LayoutBase from "../shared/layouts/LayoutBase";
import Button from "../shared/components/Button";
import GraficoDonut from "../shared/components/GraficoDonut";
import ListPrevNoti from "../shared/components/ListPrevNoti";
import { fetchLeitosData } from "../shared/services/fakeApi";
import CardLeito from "../shared/components/CardLeito";

const Dashboard = () => {
  const [leitosData, setLeitosData] = useState({
    livres: 0,
    desocupando: 0,
    ocupados: 0,
  });

  useEffect(() => {
    fetchLeitosData().then((data) => setLeitosData(data));
  }, []);

  return (
    <LayoutBase>
      <div className="container-fluid">
        <div className="container d-grid vh-100 g-2">
          {/* Linha para o botão no canto superior direito */}
          <div className="row d-flex justify-content-end align-items-center p-2">
            <Button />
          </div>

          {/* Linha para os cards lado a lado */}
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <CardLeito titulo="LIVRES" valor={leitosData.livres} bg="bg-success" />
            </div>

            <div className="col">
              <CardLeito titulo="DESOCUPANDO" valor={leitosData.desocupando} bg="text-bg-warning" />
            </div>

            <div className="col">
              <CardLeito titulo="OCUPADOS" valor={leitosData.ocupados} bg="bg-danger" />
            </div>
          </div>

          {/* Linha para o gráfico e notificações */}
          <div className="row d-flex justify-content-center align-content-center mt-5">
            <div className="col-12 col-md-8 text-center">
              <h4 className="text-body-secondary mb-3">Status dos Leitos</h4>
              <GraficoDonut
                livres={leitosData.livres}
                desocupando={leitosData.desocupando}
                ocupados={leitosData.ocupados}
              />
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center flex-column mt-4 mt-md-0">
              <h4 className="text-body-secondary mb-3">Notificações</h4>
              <ListPrevNoti />
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};

export default Dashboard;