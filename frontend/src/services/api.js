import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL//'https://aircnc-rocketseat.herokuapp.com'//'http://localhost:3333',
});

export default api;