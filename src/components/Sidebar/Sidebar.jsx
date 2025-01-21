import React from "react";
import Logo from "../../assets/colibri-light.svg";

import HomeIcon from "../../assets/icons/home.svg";
import ProductIcon from "../../assets/icons/products.svg";
import SalesIcon from "../../assets/icons/sales.svg";
import ArrowWhiteIcon from "../../assets/icons/arrowWhite.svg";
import { Link } from "react-router-dom";

import "./Sidebar.css";
const Sidebar = () => {
  const closeSidebar = () => {
    document
      .querySelector(".container-sidebar")
      ?.classList.remove("show-sidebar");
  };
  return (
    <div className="container-sidebar">
      <img className="logo" src={Logo} alt="" />
      <button className="close-modal" onClick={() => closeSidebar()}>
        <img src={ArrowWhiteIcon} alt="" />
        <span>CERRAR</span>
      </button>
      <nav className="sidebar-menu">
        <Link to={"/admin/home"} className="menu-item">
          <img src={ProductIcon} alt="" />
          <p>PRODUCTOS</p>
        </Link>
        <Link to={"/admin/categorias"} className="menu-item">
          <img src={HomeIcon} alt="" />
          <p>CATEGORIAS</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
