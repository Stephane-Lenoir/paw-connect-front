import api from './axiosConfig';

// Route Requests

export async function getAllRequests() {
  return api.get('requests');

  // const response = axios.get('http://localhost:3000/api/requests');
  // return response;
}

export async function getRequestById(id) {
  return api.get(`requests/${id}`);

  // const response = axios.get(`http://localhost:3000/api/requests/${id}`);
  // return response;
}

export async function createRequest(request) {
  return api.post('requests', request);

  // const response = axios.post('http://localhost:3000/api/requests', request);
  // return response;
}

export async function updateRequest(id, request) {
  return api.put(`requests/${id}`, request);

  // const response = axios.put(`http://localhost:3000/api/requests/${id}`, request);
  // return response;
}

export async function deleteRequest(id) {
  return api.delete(`requests/${id}`);

  // const response = axios.delete(`http://localhost:3000/api/requests/${id}`);
  // return response;
}
