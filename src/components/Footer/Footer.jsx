import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import fStyle from "./footer.module.css";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [stateNewsletter, setStateNewsletter] = useState(false);
  const sendNewsletter = (e) => {
    e.preventDefault();
    if (email.length > 0) {
      setStateNewsletter(true);
      setTimeout(() => {
        console.log(email);
        setStateNewsletter(false);
      }, 2000);
    }
  };
  return (
    <footer className={fStyle.footer}>
      <div className={fStyle.newsletter}>
        <h3>Conoce mas sobre nosotros</h3>
        <form onSubmit={(e) => sendNewsletter(e)} className={fStyle.form}>
          <input
            type="email"
            name="email_newsletter"
            placeholder="Enter your email"
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
            id="email_newsletter"
          />
          <button type="submit">
            {stateNewsletter ? (
              <div className={fStyle.loader}></div>
            ) : (
              "SUSCRIBETE"
            )}
          </button>
        </form>
      </div>
      <div className={fStyle.bottomBar}>
        <nav>
          <Link className={fStyle.itemBottom} to="/">
            Inicio
          </Link>
          <Link className={fStyle.itemBottom} to="/ayuda">
            Ayuda
          </Link>
          <Link className={fStyle.itemBottom} to="/contacto">
            Contacto Directo
          </Link>
          <Link className={fStyle.itemBottom} to="/tienda">
            Tienda
          </Link>
          <Link className={fStyle.itemBottom} to="/seguimiento">
            Seguimiento
          </Link>
        </nav>
        <div className={fStyle.socials}>
          <Link className={fStyle.social}>
            <AiFillFacebook />
          </Link>
          <Link className={fStyle.social}>
            <AiOutlineTwitter />
          </Link>
          <Link className={fStyle.social}>
            <AiFillInstagram />
          </Link>
          <Link className={fStyle.social}>
            <AiFillYoutube />
          </Link>
        </div>
      </div>
      <hr />
      <div className={fStyle.terms}>
        <span>© 2023 Colibri. All rights reserved.</span>
        <div className={fStyle.privacy}>
          <Link className={fStyle.itemTerms} to="/" target="_blank">
            Terms Of Use
          </Link>
          <Link className={fStyle.itemTerms} to="/" target="_blank">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
