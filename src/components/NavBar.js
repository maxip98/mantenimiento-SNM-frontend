// Barra de navegación que muestra el nombre del usuario y un botón para cerrar sesión.

import React from 'react';

const NavBar = ({ handleLogout, username }) => {
  return (
    <div className="bg-blue-600 p-4 flex justify-between items-center text-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold">Gestión de Tareas</h1>
      <div className="flex items-center">
        <span className="mr-4">Hola, {username}</span>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md shadow"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default NavBar;