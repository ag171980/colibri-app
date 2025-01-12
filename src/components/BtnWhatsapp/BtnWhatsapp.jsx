import React from 'react'

import IconWhatsapp from '../../assets/whatsapp.png'
import './btnWhatsapp.css'
const BtnWhatsapp = ({ linkWpp }) => {
  return (
    <a href={linkWpp} target='_blank' rel='noreferrer' className='btn-whatsapp'>
      <img src={IconWhatsapp} alt='' />
    </a>
  )
}

export default BtnWhatsapp
