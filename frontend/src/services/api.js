import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Snacks API
export const snackService = {
  // GET
  getAll: () => api.get('/snacks'),
  getById: (id) => api.get(`/snacks/${id}`),
  getByCategory: (categoria) => api.get(`/snacks/category/${categoria}`),
  search: (nome) => api.get(`/snacks/search/${nome}`),

  // POST
  create: (data) => api.post('/snacks', data),

  // PUT
  update: (id, data) => api.put(`/snacks/${id}`, data),

  // DELETE
  delete: (id) => api.delete(`/snacks/${id}`),
};

export default api;
