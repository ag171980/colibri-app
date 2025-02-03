import React, { useState } from 'react'
import FaqCSS from './faq.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'

import CloudLeft from '../../assets/cloud.svg'
import CloudRight from '../../assets/cloud-right.svg'
import { Link } from 'react-router-dom'
const FAQ = () => {
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })

  const faqs = [
    {
      id: 1,
      title: '¿Cuál es el tiempo de demora estimado de reparación?',
      description:
        'El tiempo estimado en las reparaciones de falla comunes demoran 24/72hs dentro del horario habil de trabajo, esto aplica a iPhone, Macbook, iPad, Apple Watch. El tiempo estimado de los cambio y reparaciones de perifericos demora 24/48hs dentro del horario habil de trabajo.'
    },
    {
      id: 2,
      title: '¿Qué tipo de garantía obtengo en mis reparaciones?',
      description:
        'La garantía cubre únicamente las fallas reparadas por Colibri Premium Service. No nos responsabilizamos por reparaciones realizadas por terceros.'
    },
    {
      id: 3,
      title: '¿⁠Ofrecen servicio en un sitio físico o sólo con envíos?',
      description:
        'Hasta la actualidad trabajamos con servicio de logística y envío. Y reparaciones en el momento con turno previo, estamos ubicados en Palermo, Buenos Aires CABA. Contactanos para agendar tu reparación.'
    }
  ]
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
              <h3>{faq.title}</h3>
              <p>{faq.description}</p>
            </div>
          ))}

          <Link to={socials.wpp} target='_blank' className={FaqCSS.btnContact}>
            ¡Contactános!
          </Link>
        </div>
      </div>
      <Footer socials={socials} />
    </div>
  )
}

export default FAQ
