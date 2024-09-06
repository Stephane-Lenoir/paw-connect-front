import axios from 'axios';

// Route Assocations

export async function getAllAssociations() {
  const response = axios.get('http://localhost:3000/api/associations');

  return response;
}

export async function getAssociationById(id) {
  const response = axios.get(`http://localhost:3000/api/associations/${id}`);

  return response;
}
