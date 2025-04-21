import React, { useEffect, useState } from 'react'
import FaqCSS from './faq.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'

import CloudLeft from '../../assets/cloud.svg'
import CloudRight from '../../assets/cloud-right.svg'
import { Link } from 'react-router-dom'
import { initService } from '../../services/init.service'
const FAQ = () => {
  const [faqs, setFaqs] = useState([])
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })

  const getFaqs = async () => {
    const response = await initService.getFaqs()

    setFaqs(response.data)
  }

  useEffect(() => {
    document.title = 'Preguntas Frecuentes - Colibri Premium'
    getFaqs()
  }, [])

  return (
    <div className={FaqCSS.faq}>
      <Header />
      <div className={FaqCSS.containerFaq}>
        <BtnWhatsapp linkWpp={socials.wpp} />
        <img
          className={`${FaqCSS.cloud} ${FaqCSS.cloudLeft} animate__animated animate__fadeIn animate__delay-01s`}
          src={CloudLeft}
          alt=''
        />
        <img
          className={`${FaqCSS.cloud} ${FaqCSS.cloudRight} animate__animated animate__fadeIn animate__delay-02s`}
          src={CloudRight}
          alt=''
        />
        <div
          className={`${FaqCSS.cardFaq} animate__animated animate__fadeIn animate__delay-03s`}
        >
          <h1>Preguntas frecuentes</h1>
          {faqs.map((faq, keyFaq) => (
            <div key={keyFaq} className={FaqCSS.faqItem}>
              <h3>{faq.titulo}</h3>
              <p>{faq.respuesta}</p>
            </div>
          ))}

          <div className={FaqCSS.containerBtnContact}>
            <Link
              className={FaqCSS.btnContact}
              to={socials.wpp}
              rel='noreferrer'
              target='_blank'
            >
              ¡Contactános!
            </Link>
          </div>
        </div>
      </div>
      <Footer socials={socials} />
    </div>
  )
}

export default FAQ
