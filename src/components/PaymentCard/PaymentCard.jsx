import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { paymentService } from '../../services/payment.service'

import ArrowIcon from '../../assets/icons/arrow.svg'
import MPIcon from '../../assets/payments/mp.svg'
import MasterIcon from '../../assets/payments/mastercard.png'
import TransfIcon from '../../assets/payments/deposito.png'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/products/cartSlice'

const PaymentCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)
  const { buyer } = useSelector(state => state.buyer)

  const makeOrder = async () => {
    if (items && buyer) {
      const response = await paymentService.makeOrder(
        items,
        buyer,
        'transferencia'
      )
      if (response.status === 200) {
        navigate('/pago/transferencia')
      }
    }
  }
  return (
    <div className='payments'>
      <h3>Elige una forma de pago</h3>
      <Link to={'/pago/mercadopago'} className='payment'>
        <img src={MPIcon} alt='' />
        <h4>Mercado Pago</h4>
      </Link>
      <Link to={'/pago/tarjeta'} className='payment'>
        <img src={MasterIcon} alt='' />
        <h4>Tarjeta de Crédito/Débito</h4>
      </Link>
      <div onClick={() => makeOrder()} className='payment'>
        <img src={TransfIcon} alt='' />
        <h4>Transferencia</h4>
      </div>
      <Link to={'/checkout'} className='back'>
        <img src={ArrowIcon} alt='' />
        VOLVER
      </Link>
    </div>
  )
}

export default PaymentCard
