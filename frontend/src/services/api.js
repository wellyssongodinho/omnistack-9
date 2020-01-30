import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-rocketseat.herokuapp.com/'//'http://localhost:3333',
});

export default api;