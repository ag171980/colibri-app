import React from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import LogoColibri from "../../assets/colibir.svg";
import { Link } from "react-router-dom";
import Language from "../Language/Language";
import Menu from "./Menu";
const MenuMobile = ({ stateMenu, setStateMenu }) => {
  return (
    <div className={`container-menu ${stateMenu ? "show-menu" : ""}`}>
      <div className="menu-mobile">
        <button
          onClick={() => {
            setStateMenu(!stateMenu);
          }}
          className="back"
        >
          <img src={ArrowDown} alt="" />
        </button>
        <Link to="/">
          <img src={LogoColibri} alt="" />
        </Link>
        <Language />
        <nav className="menu-nav">
          <Menu />
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
