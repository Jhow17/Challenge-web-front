import api from "./api";

export const buscaQuartos = async () =>{
  try{
      const response = await api.get('/quartos')
      return response.data
  }catch(error){
    console.error('Erro ao buscar lista', error)
    let errorMessage = 'Falha ao buscar quartos.';
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
   
    throw new Error(errorMessage);
  }
}
