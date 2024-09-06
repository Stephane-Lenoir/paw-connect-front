import api from './axiosConfig';

// Route Assocations

export async function getAllAssociations() {
  return api.get('associations');

  // const response = axios.get('http://localhost:3000/api/associations');
  // return response;
}

export async function getAssociationById(id) {
  return api.get(`associations/${id}`);

  // const response = axios.get(`http://localhost:3000/api/associations/${id}`);
  // return response;
}
