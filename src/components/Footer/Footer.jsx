import { Link } from 'react-router-dom'
import FooterCSS from './footer.module.css'

import LogoColibri from '../../assets/colibri-light.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'
const Footer = ({ socials }) => {
  return (
    <footer className={FooterCSS.footer}>
      <img
        className={`animate__animated animate__fadeIn animate__delay-01s`}
        src={LogoColibri}
        alt=''
      />
      <div className={FooterCSS.footerInfo}>
        <p className={`animate__animated animate__fadeIn animate__delay-01s`}>
          Copyright © 2025 Colibrí Premium Service
        </p>
        <div className={FooterCSS.socials}>
          <a
            href={socials.fb}
            target='_blank'
            rel='noreferrer'
            className={`${FooterCSS.social} animate__animated animate__fadeIn animate__delay-01s`}
          >
            <img src={FacebookIcon} alt='' />
          </a>
          <a
            href={socials.ig}
            target='_blank'
            rel='noreferrer'
            className={`${FooterCSS.social} animate__animated animate__fadeIn animate__delay-02s`}
          >
            <img src={InstagramIcon} alt='' />
          </a>
          <a
            href={socials.wpp}
            target='_blank'
            rel='noreferrer'
            className={`${FooterCSS.social} animate__animated animate__fadeIn animate__delay-03s`}
          >
            <img src={WhatsappIcon} alt='' />
          </a>
        </div>
        <div
          className={`${FooterCSS.miniMenu} animate__animated animate__fadeIn animate__delay-04s`}
        >
          <Link to='/servicios'>Términos y condiciones</Link>
          <Link to='/servicios'>Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
