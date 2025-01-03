import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado'); // Mensaje de depuración
    try {
      const response = await axios.post('https://mantenimiento-snm-backend-production.up.railway.app/api/auth/login', { username, password });
      console.log('Respuesta del servidor:', response.data); // Mensaje de depuración
      localStorage.setItem('token', response.data.token);
      console.log('Token almacenado en localStorage:', localStorage.getItem('token')); // Mensaje de depuración
      console.log('Redirigiendo a la página principal'); // Mensaje de depuración
      window.location.href = '/';
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error); // Mensaje de depuración
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">TechCorp</h1>
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;