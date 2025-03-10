import React from 'react'
import Logo from '../../assets/logo.svg'
import CartPayment from '../../components/CartPayment/CartPayment'
import './Payment.css'
import PaymentCard from '../../components/PaymentCard/PaymentCard'

const Payment = () => {
  const showCart = () => {
    if (document.querySelector('.card-cart')?.classList.contains('show-cart')) {
      document.querySelector('.card-cart')?.classList.remove('show-cart')
    } else {
      document.querySelector('.card-cart')?.classList.add('show-cart')
    }
  }
  return (
    <div className='container-payment'>
      <header>
        <img className='logo' src={Logo} alt='' />
      </header>
      <h1>Medios de Pago</h1>
      <div className='payments-cart'>
        <PaymentCard />
        <CartPayment />
        <button onClick={() => showCart()} type='button' className='see-cart'>
          VER CARRITO
        </button>
      </div>
    </div>
  )
}

export default Payment
