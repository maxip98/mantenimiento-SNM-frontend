// MenuTabs: Pestañas de navegación para cambiar entre tareas pendientes, agregar nueva tarea (solo para admin) y tareas completadas.

import React from 'react';

const MenuTabs = ({ setActiveTab, activeTab, userRole }) => {
  return (
    <div className="flex justify-around mb-4 bg-white p-4 rounded-lg shadow-lg">
      <button
        onClick={() => setActiveTab('pending')}
        className={`py-1 px-3 ${activeTab === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
      >
        Pendientes
      </button>
      {userRole === 'admin' && (
        <button
          onClick={() => setActiveTab('newTask')}
          className={`py-1 px-3 ${activeTab === 'newTask' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
        >
          Agregar Nueva
        </button>
      )}
      <button
        onClick={() => setActiveTab('completed')}
        className={`py-1 px-3 ${activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
      >
        Terminadas
      </button>
    </div>
  );
};

export default MenuTabs;