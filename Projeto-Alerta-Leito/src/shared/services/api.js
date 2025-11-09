import axios from "axios";
const api = axios.create({
  baseURL:import.meta.env.VITE_SERVER_URL
  //baseURL: 'http://192.168.0.17:5001'
 
})
export default api