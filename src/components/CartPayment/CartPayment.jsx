import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../utils/functions/format'
import RectangleExample from '../../assets/rectangle.svg'

import './CartPayment.css'
const CartPayment = () => {
  const { items } = useSelector(state => state.cart)

  return (
    <div className='card-cart'>
      <h2>Tú Carrito</h2>
      <div className='products'>
        {items?.map((item, key) => (
          <div key={key} className='product'>
            <div className='detail-principal'>
              <img
                src={
                  item.image
                    ? `${process.env.REACT_APP_URL_BACKEND_BASE}/${item.image}`
                    : RectangleExample
                }
                alt=''
              />
              <div className='description-product'>
                <h3>{item.nombre}</h3>
                <p className='price'>
                  {' '}
                  {item.cantidad} x ${formatPrice(item.precio)} - $
                  {formatPrice(item.cantidad * item.precio)}
                </p>
              </div>
            </div>
            <div className='detail-product'>
              <input
                type='number'
                name='quantity'
                id='quantity'
                className='quantity'
                readOnly
                value={item.cantidad}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='detail-purchase'>
        <div className='price-final'>
          <h3>Subtotal</h3>
          <h3>
            $
            {formatPrice(
              items?.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0)
            )}
          </h3>
        </div>
        <div className='price-final'>
          <h3>Total</h3>
          <h3>
            $
            {formatPrice(
              items?.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0)
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CartPayment
