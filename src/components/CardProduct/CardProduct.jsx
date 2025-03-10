import React from 'react'
import RectangleExample from '../../assets/rectangle.svg'
import './cardProduct.css'
const CardProduct = ({ product }) => {
  return (
    <div
      className={`card-product animate__animated animate__fadeIn animate__delay-0${product.id}s`}
    >
      <img
        src={
          product?.imagen?.length > 0
            ? `${process.env.REACT_APP_URL_BACKEND_BASE}/${product.imagen[0]}`
            : RectangleExample
        }
        alt=''
      />
      <a href={`/productos/${product.categoria.toLowerCase()}/${product.id}`}>
        <h3>{product.nombre}</h3>
      </a>
    </div>
  )
}

export default CardProduct
