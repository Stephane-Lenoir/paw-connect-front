import api from './axiosConfig';

// Route Auth
export async function login(user) {
  return api.post('auth/login', user);

  // const response = axios.post('http://localhost:3000/api/auth/login', user);
  // return response;
}

export async function register(user) {
  return api.post('auth/register', user);

  //  const response = axios.post('http://localhost:3000/api/auth/register', user);
  //  return response;
}
