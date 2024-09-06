import axios from 'axios';

//Route User

export async function getUser() {
  const response = axios.get('http://localhost:3000/api/profiles');

  return response;
}

export async function updateUserById(id) {
  const response = axios.put(`http://localhost:3000/api/profiles/${id}`);

  return response;
}

export async function deleteUserById(id) {
  const response = axios.delete(`http://localhost:3000/api/profiles/${id}`);

  return response;
}
