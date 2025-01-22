import React, { useState } from 'react'
import './faq.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'

import CloudLeft from '../../assets/cloud.svg'
import CloudRight from '../../assets/cloud-right.svg'
const FAQ = () => {
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })
  return (
    <div className='faq'>
      <Header />
      <div className='container-faq'>
        <BtnWhatsapp linkWpp={socials.wpp} />
        <img className='cloud cloud-left animate__animated animate__fadeIn animate__delay-01s' src={CloudLeft} alt='' />
        <img className='cloud cloud-right animate__animated animate__fadeIn animate__delay-02s' src={CloudRight} alt='' />
        <div className='card-faq animate__animated animate__fadeIn animate__delay-03s'>
          <h1>Preguntas frecuentes</h1>
          <div className='faq-item'>
            <h3>¿Cuál es el tiempo de demora estimado de reparación? </h3>
            <p>
              El tiempo estimado en las reparaciones de falla comunes demoran
              24/72hs dentro del horario habil de trabajo, esto aplica a iPhone,
              Macbook, iPad, Apple Watch. El tiempo estimado de los cambio y
              reparaciones de perifericos demora 24/48hs dentro del horario
              habil de trabajo.
            </p>
          </div>
          <div className='faq-item'>
            <h3>¿Qué tipo de garantía obtengo en mis reparaciones?</h3>
            <p>
              La garantía cubre únicamente las fallas reparadas por Colibri
              Premium Service. No nos responsabilizamos por reparaciones
              realizadas por terceros.
            </p>
          </div>
          <div className='faq-item'>
            <h3>¿⁠Ofrecen servicio en un sitio físico o sólo con envíos?</h3>
            <p>
              Hasta la actualidad trabajamos con servicio de logistica y envio.
              Y reparaciones en el momento con turno previo, estamos ubicados en
              Palermo, Buenos Aires CABA. Contactanos para agendar tu
              reparacion.
            </p>
          </div>

          <button className='btn-contact'>¡Contactános!</button>
        </div>
      </div>
      <Footer socials={socials} />
    </div>
  )
}

export default FAQ
