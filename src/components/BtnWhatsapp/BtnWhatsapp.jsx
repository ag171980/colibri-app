import React from 'react'

import IconWhatsapp from '../../assets/whatsapp.png'
import './btnWhatsapp.css'
const BtnWhatsapp = ({ linkWpp }) => {
  return (
    <a href={linkWpp} target='_blank' rel='noreferrer' className='btn-whatsapp animate__animated animate__fadeIn animate__delay-01s'>
      <img src={IconWhatsapp} alt='' />
    </a>
  )
}

export default BtnWhatsapp
