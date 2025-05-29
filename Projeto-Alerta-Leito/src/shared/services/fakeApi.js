// valores vindo do banco de dados
import { buscaQuartos } from "./quartos";

export const fetchLeitosData = async  () => {
  let livre = 0
  let ocupado = 0
  let desocupando = 0
  try {
  const data = await buscaQuartos();
  data.forEach((quarto) => {
  if (quarto.status === 'livre') {
    livre += 1
  }
  else if (quarto.status === 'ocupado'){
    ocupado += 1
  }
  else{
    desocupando += 1
  }

  })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          livres: livre,
          desocupando: desocupando,
          ocupados: ocupado,
        });
      }, 2000);
    });
  }catch (error){
    console.error("Erro em fetchLeitosData:", error)

  }
  };