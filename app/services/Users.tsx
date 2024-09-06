import api from './axiosConfig';

//Route User

export async function getUser() {
  return api.get('profiles');

  // const response = axios.get('http://localhost:3000/api/profiles');
  // return response;
}

export async function updateUserById(id) {
  return api.put(`profiles/${id}`);

  // const response = axios.put(`http://localhost:3000/api/profiles/${id}`);
  // return response;
}

export async function deleteUserById(id) {
  return api.delete(`profiles/${id}`);

  // const response = axios.delete(`http://localhost:3000/api/profiles/${id}`);
  // return response;
}
