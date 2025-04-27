import React from "react";
import QuartoItem from "./QuartoItem";

const ListaQuartos = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Responsável</th>
            <th>Quarto</th>
            <th>Leito</th>

            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
            <QuartoItem
              key={"01"}
              quarto={"02"}
              leito={"01"}
              responsavel={"Roberta"}
              status={"ocupado"}
            />
                        <QuartoItem
              key={"02"}
              quarto={"05"}
              leito={"02"}
              responsavel={"Mari"}
              status={"aguardando manutenção"}
            />
        </tbody>
      </table>
    </div>
  );
};

export default ListaQuartos;
