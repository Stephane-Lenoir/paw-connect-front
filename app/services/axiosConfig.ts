import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

//!TODO : Coder un intercepteur (request) pour ajouter le token a chaque request quand il existe. (Regarder intercepteur response)

export default api;
