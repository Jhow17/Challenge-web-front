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
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="" >  <h5 className="text-center" >Ocupados</h5 > {quartosData.filter((q) => q.status === 'ocupado').map((quarto) => (
                     <QuartoItem
              key={quarto.id}
              quarto={quarto.numeroQuarto}
              leito={quarto.leito}
              responsavel={quarto.responsavel}
              status={quarto.status}
              hora={quarto.updatedAt}
            />
        ))} </div>
        <div  className="">     <h5 className="text-center" >Em Manutenção</h5 > {quartosData.filter((q) => q.status === 'aguardando manutenção' || q.status === 'aguardando manutencao' ).map((quarto) => (
                     <QuartoItem
              key={quarto.id}
              quarto={quarto.numeroQuarto}
              leito={quarto.leito}
              responsavel={quarto.responsavel}
              status={quarto.status}
              hora={quarto.updatedAt}
            />
        ))}   </div>
        <div className=" " >       <h5 className="text-center" >Em Limpeza</h5 > {quartosData.filter((q) => q.status === 'aguardando limpeza').map((quarto) => (
                     <QuartoItem
              key={quarto.id}
              quarto={quarto.numeroQuarto}
              leito={quarto.leito}
              responsavel={quarto.responsavel}
              status={quarto.status}
               hora={quarto.updatedAt}
            />
        ))}   </div>
        <div  className=" ">    <h5 className="text-center" >Livres</h5 > {quartosData.filter((q) => q.status === 'livre').map((quarto) => (
                     <QuartoItem
              key={quarto.id}
              quarto={quarto.numeroQuarto}
              leito={quarto.leito}
              responsavel={quarto.responsavel}
              status={quarto.status}
              hora={quarto.updatedAt}
            />
        ))}   </div>


      </div>
    </div>
  );
};

export default ListaQuartos;