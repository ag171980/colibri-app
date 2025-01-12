import React from 'react'

import './cardProduct.css'
const CardProduct = ({ product }) => {
  return (
    <div className='card-product'>
      <img src={product.img} alt='' />
      <a href={`/${product.category.toLowerCase()}/${product.id}`}>
        <h3>{product.title}</h3>
      </a>
    </div>
  )
}

export default CardProduct
