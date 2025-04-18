import React from "react";
import LayoutBase from "../shared/layouts/LayoutBase";
import ListaQuartos from "../shared/components/ListaQuartos";

const ListaStatus = () => {
  return (
    <LayoutBase>
      <div className="container mt-4">
        <h4>Status dos Quartos</h4>
        <ListaQuartos/>
    </div>
    </LayoutBase>
  ) ;
};

export default ListaStatus;
