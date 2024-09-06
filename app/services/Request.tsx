import axios from 'axios';

// Route Requests

export async function getAllRequests() {
  const response = axios.get('http://localhost:3000/api/requests');

  return response;
}

export async function getRequestById(id) {
  const response = axios.get(`http://localhost:3000/api/requests/${id}`);

  return response;
}

export async function createRequest(request) {
  const response = axios.post('http://localhost:3000/api/requests', request);

  return response;
}

export async function updateRequest(id, request) {
  const response = axios.put(`http://localhost:3000/api/requests/${id}`, request);

  return response;
}

export async function deleteRequest(id) {
  const response = axios.delete(`http://localhost:3000/api/requests/${id}`);

  return response;
}
