//Login: Formulario de inicio de sesión que envía los datos a un servidor y almacena el token en localStorage.

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado'); // Mensaje de depuración
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
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
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
  );
};

export default Login;