import { React, useEffect, useState } from "react";
import QuartoItem from "./QuartoItem";
import { quartos } from "../services/quartos";

const ListaQuartos = () => {
  const [quartosData, setQuartosData] = useState([]);

  useEffect(() => {
    quartos().then((data) => setQuartosData(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-zinc-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Responsável</th>
            <th className="px-4 py-2 text-left font-medium">Quarto</th>
            <th className="px-4 py-2 text-left font-medium">Leito</th>
            <th className="px-4 py-2 text-center font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {quartosData.map((quarto, idx) => (
            <QuartoItem
              key={idx}
              quarto={quarto.quarto}
              leito={quarto.leito}
              responsavel={quarto.responsavel}
              status={quarto.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaQuartos;
