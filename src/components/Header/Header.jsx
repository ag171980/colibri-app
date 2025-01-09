import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../../assets/logo.svg";
import Menu from "../../assets/icons/menu.svg";

import Language from "../Language/Language";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [stateMenu, setStateMenu] = useState(false);

  const showMenu = () => {
    setStateMenu(!stateMenu);
  };
  return (
    <header className="header">
      <button onClick={() => showMenu()} className="btn-menu">
        <img src={Menu} alt="" />
      </button>
      <MenuMobile stateMenu={stateMenu} setStateMenu={setStateMenu} />
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className="menu">
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
        <Language />
      </nav>
    </header>
  );
};
export default Header;
