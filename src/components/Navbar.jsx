import React from 'react';
// TODO: Importar Link de react-router-dom

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">🍽️ Recetario Digital</div>
        <div className="nav-links">
          {/* TODO: Agregar los Links aquí */}
          <span>Inicio</span>
          <span>Contacto</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;