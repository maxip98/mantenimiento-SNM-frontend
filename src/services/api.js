import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

api.interceptors.request.use(request => {
  console.log('Solicitud enviada con token:', request.headers.Authorization); // Mensaje de depuración
  return request;
});

api.interceptors.response.use(response => {
  console.log('Respuesta recibida:', response); // Mensaje de depuración
  return response;
}, error => {
  console.error('Error en la respuesta:', error); // Mensaje de depuración
  return Promise.reject(error);
});

export default api;