import  { React, useEffect, useState } from "react";
import QuartoItem from "./QuartoItem";
import { buscaQuartos } from "../services/quartos"; 

const ListaQuartos = () => {
  const [quartosData, setQuartosData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

  useEffect(() =>{
    const carregarQuartos = async () => {
      try {
        setIsLoading(true); 
        setError(null);    
        const data = await buscaQuartos();
        setQuartosData(data);
      }catch (err) {
        console.error("Erro ao carregar quartos no componente:", err);
        setError(err.message || "Falha ao buscar os dados dos quartos.");
      }
      finally {
        setIsLoading(false); 
      }

    }
    carregarQuartos()
  },[])
  if (isLoading) {
    return <p className="text-center py-4">Carregando quartos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-4">Erro: {error}</p>;
  }

  if (quartosData.length === 0) {
    return <p className="text-center py-4">Nenhum quarto encontrado.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle gap-4">
        <thead className="table-light">
          <tr>
            <th>Responsável</th>
            <th>Quarto</th>
            <th>Leito</th>

            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {quartosData.map((quarto) => (
                     <QuartoItem
              key={quarto.id}
              quarto={quarto.numeroQuarto}
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