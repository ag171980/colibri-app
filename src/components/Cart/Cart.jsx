import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

import CartCSS from './cart.module.css'
import { useSelector } from 'react-redux'
import { obtenerCantidadProductos } from '../../redux/products/cartSlice'
import { showModal } from '../../utils/functions/modal'
import ModalCart from '../ModalCart/ModalCart'
const Cart = () => {
  const cantProductos = useSelector(obtenerCantidadProductos)

  return (
    <>
      <div
        onClick={() => showModal('.container-modal-cart')}
        className={CartCSS.containerCart}
      >
        <TiShoppingCart />
        <div className={CartCSS.cantProducts}>
          <p>{cantProductos}</p>
        </div>
      </div>
      <ModalCart />
    </>
  )
}

export default Cart
