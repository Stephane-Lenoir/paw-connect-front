import axios from 'axios';

// Route Auth
export async function login(user) {
  const response = axios.post('http://localhost:3000/api/auth/login', user);

  return response;
}

export async function register(user) {
  const response = axios.post('http://localhost:3000/api/auth/register', user);

  return response;
}
