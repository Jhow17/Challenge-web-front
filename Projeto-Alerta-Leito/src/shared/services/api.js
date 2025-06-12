import axios from "axios";
const api = axios.create({
  baseURL: 'https://challenge-web-front.onrender.com'
})
export default api