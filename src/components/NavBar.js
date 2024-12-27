// NavBar: Barra de navegación con un botón para cerrar sesión.

import React from 'react';

const NavBar = ({ handleLogout }) => {
  return (
    <div className="bg-blue-600 p-4 flex justify-between items-center text-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold">Gestión de Tareas</h1>
      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md shadow"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default NavBar;