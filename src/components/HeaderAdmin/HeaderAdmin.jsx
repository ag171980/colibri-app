import React from 'react'

import Logo from '../../assets/logo.svg'

import './headerAdmin.css'
import { Link } from 'react-router-dom'
const HeaderAdmin = () => {
  return (
    <header className='header-login vh-10'>
      <Link to={'/'}>
        <img src={Logo} alt='' />
      </Link>
    </header>
  )
}

export default HeaderAdmin
