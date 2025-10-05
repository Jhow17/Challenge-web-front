import axios from "axios";
const api = axios.create({
  //baseURL: 'https://challenge-web-front.onrender.com'
  baseURL: 'http://192.168.0.20:5001'
})
export default api