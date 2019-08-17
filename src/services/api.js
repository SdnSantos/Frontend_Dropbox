import axios from 'axios';

const api = axios.create({
  baseURL: "https://backend-dropbox-sidney.herokuapp.com"
})

export default api;