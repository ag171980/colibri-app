import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

import CartCSS from './cart.module.css'
import { useSelector } from 'react-redux'
import { obtenerCantidadProductos } from '../../redux/products/cartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
  const cantProductos = useSelector(obtenerCantidadProductos)
  console.log(cantProductos)

  return (
    <Link to={'/cart'} className={CartCSS.containerCart}>
      <TiShoppingCart />
      <div className={CartCSS.cantProducts}>
        <p>{cantProductos}</p>
      </div>
    </Link>
  )
}

export default Cart
