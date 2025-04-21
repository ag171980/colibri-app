import React, { useEffect } from 'react'

import IconApproved from '../../../assets/icons/checkgreen.png'

import { Link } from 'react-router-dom'
import './Approved.css'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/products/cartSlice'
import { clearBuyer } from '../../../redux/products/buyerSlice'

const Approved = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearCart())
    dispatch(clearBuyer())
  }, [])
  return (
    <div className='container-approved'>
      <HeaderAdmin />
      <div className='approved'>
        <img src={IconApproved} alt='' />
        <h1>Pago Aprobado</h1>
        <p>
          Muchas gracias por tu compra. En breve te estará llegando un correo
          con la confirmación de tu compra.
        </p>
        <Link to={'/'}>SEGUIR COMPRANDO</Link>
      </div>
    </div>
  )
}

export default Approved
