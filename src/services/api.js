// Configuración de Axios para realizar solicitudes HTTP al backend. Incluye interceptores para agregar el token de autenticación a las solicitudes y manejar las respuestas.

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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