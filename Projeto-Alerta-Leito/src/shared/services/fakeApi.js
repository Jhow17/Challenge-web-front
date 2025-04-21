// simulaçao de como os valores viriam de um banco de dados
export const fetchLeitosData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          livres: 17,
          desocupando: 27,
          ocupados: 30,
        });
      }, 2000);
    });
  };