import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Link className="menu-item" to="/servicios">
        Servicios
      </Link>
      <Link className="menu-item" to="/productos">
        Productos
      </Link>
      <Link className="menu-item" to="/reparacion">
        Agendar reparación
      </Link>
      <Link className="menu-item" to="/faq">
        Preguntas frecuentes
      </Link>
    </>
  );
};

export default Menu;
