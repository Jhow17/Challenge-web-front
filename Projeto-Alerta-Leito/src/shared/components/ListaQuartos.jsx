import React from "react";
import QuartoItem from "./QuartoItem";

const ListaQuartos = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Paciente</th>
            <th>Quarto</th>
            <th>Leito</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
            <QuartoItem
              key={"01"}
              paciente={"Juninho"}
              quarto={"02"}
              leito={"01"}
              status={"ocupado"}
            />
                        <QuartoItem
              key={"02"}
              paciente={"Robinho"}
              quarto={"05"}
              leito={"02"}
              status={"aguardando manutenção"}
            />
        </tbody>
      </table>
    </div>
  );
};

export default ListaQuartos;
