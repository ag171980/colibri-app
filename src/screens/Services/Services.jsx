import React, { useEffect, useState } from 'react'
import './services.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OurServices from '../Index/OurServices'

import Cloud1 from '../../assets/cloud-1.svg'
import Cloud2 from '../../assets/cloud-2.svg'
import TyC from '../../components/TyC/TyC'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'
const Services = () => {
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })

  useEffect(() => {
    document.title = 'Servicios - Colibri Premium'
  }, [])
  return (
    <div className='services'>
      <Header />
      <div className='container-services'>
        <BtnWhatsapp linkWpp={socials.wpp} />
        <img
          className='cloud cloud-left animate__animated animate__fadeIn animate__delay-01s'
          src={Cloud1}
          alt=''
        />
        <OurServices form={true} />
        <img
          className='cloud cloud-right animate__animated animate__fadeIn animate__delay-01s'
          src={Cloud2}
          alt=''
        />
      </div>

      <TyC />

      <Footer socials={socials} />
    </div>
  )
}

export default Services
