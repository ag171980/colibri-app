import React, { useState } from 'react'
import './modalCart.css'
import CloseIcon from '../../assets/icons/close.svg'
import RectangleExample from '../../assets/rectangle.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import EmptyCart from '../../assets/cart-empty.webp'
import { closeModal } from '../../utils/functions/modal'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../utils/functions/format'
import { useDispatch } from 'react-redux'
import {
  addCantProduct,
  removeCantProduct,
  removeFromCart
} from '../../redux/products/cartSlice'
import CustomAlert from '../Alert/Alert'
import { Link } from 'react-router-dom'
const ModalCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.items)

  const [alert, setAlert] = useState(undefined)

  const removeItem = productId => {
    setAlert({ msg: 'Producto eliminado del carrito', variant: 'danger' })
    dispatch(removeFromCart(productId))
    setTimeout(() => {
      setAlert(undefined)
    }, 4000)
  }

  return (
    <>
      {alert && <CustomAlert alert={alert} />}
      <div className='container-modal-cart'>
        <div className='modal-cart'>
          <div className='header-modal'>
            <h3>Mi Carrito</h3>
            <button onClick={() => closeModal('.container-modal-cart')}>
              <img src={CloseIcon} alt='' />
            </button>
          </div>
          <div className='body-modal'>
            {cart.length === 0 && (
              <div className='empty-cart'>
                <img src={EmptyCart} alt='' />
                <h4>No hay productos en tu carrito</h4>
              </div>
            )}
            <div className='products-cart'>
              {cart.map((itemCart, keyItem) => (
                <div key={keyItem} className='item-cart'>
                  <div className='left-product'>
                    <img
                      src={
                        itemCart.image
                          ? `${process.env.REACT_APP_URL_BACKEND_BASE}/${itemCart.image}`
                          : RectangleExample
                      }
                      alt=''
                    />
                    <div className='description-product'>
                      <h4>{itemCart.nombre}</h4>
                      <p>
                        {itemCart.cantidad} x ${formatPrice(itemCart.precio)} -
                        ${formatPrice(itemCart.cantidad * itemCart.precio)}
                      </p>
                    </div>
                  </div>
                  <div className='right-product'>
                    <div className='input-cant'>
                      <button
                        disabled={itemCart.cantidad === 1}
                        onClick={() => dispatch(removeCantProduct(itemCart))}
                      >
                        -
                      </button>
                      <input type='number' value={itemCart.cantidad} />
                      <button
                        disabled={itemCart.cantidad == itemCart.stock}
                        onClick={() => dispatch(addCantProduct(itemCart))}
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(itemCart.id)}>
                      <img src={DeleteIcon} alt='' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {cart.length > 0 && (
            <div className='footer-modal'>
              <div className='total'>
                <h3>Total:</h3>
                <h3>
                  $
                  {formatPrice(
                    cart.reduce((acumulador, item) => {
                      return acumulador + item.precio * item.cantidad
                    }, 0)
                  )}
                </h3>
              </div>
              <Link to={'/checkout'} className='btn-buy'>
                Finalizar Compra
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ModalCart
