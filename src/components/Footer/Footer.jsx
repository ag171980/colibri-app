import { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import LogoColibri from "../../assets/colibri-light.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={LogoColibri} alt="" />
      <div className="footer-info">
        <p>Copyright © 2024 Colibrí Premium Service</p>
        <div className="socials">
          <div className="social">
            <img src={FacebookIcon} alt="" />
          </div>
          <div className="social">
            <img src={InstagramIcon} alt="" />
          </div>
          <div className="social">
            <img src={WhatsappIcon} alt="" />
          </div>
        </div>
        <div className="mini-menu">
          <Link to="/servicios">Términos y condiciones</Link>
          <Link to="/servicios">Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
