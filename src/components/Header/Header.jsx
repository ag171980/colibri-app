import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import headerStyle from "./header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.Header}>
      <div className={headerStyle.logo}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className={headerStyle.menu}>
        <Link className={headerStyle.menuItem} to="/tienda">
          Tienda
        </Link>
        <Link className={headerStyle.menuItem} to="/tienda">
          Servicio Técnico
        </Link>
        <Link className={headerStyle.menuItem} to="/tienda">
          Ayuda
        </Link>
        <Link className={headerStyle.menuItem} to="/tienda">
          Idioma
        </Link>
      </nav>

      <div className={headerStyle.user}>
        <button>Ingresa</button>

        <Link className={headerStyle.tracking} to="/seguimiento">
          SEGUIMIENTO
        </Link>
      </div>
    </header>
  );
};
export default Header;
