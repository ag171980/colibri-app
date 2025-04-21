import React, { useEffect, useState } from 'react'
// images

import { useSelector } from 'react-redux'
import SelectProvinces from '../../components/SelectProvinces/SelectProvinces'
import { Link, useNavigate } from 'react-router-dom'

import './Checkout.css'
import CartPayment from '../../components/CartPayment/CartPayment'
import { useDispatch } from 'react-redux'
import { saveData } from '../../redux/products/buyerSlice'
import { paymentService } from '../../services/payment.service'
// images
import { images } from '../../utils/functions/images'
// steps
import { CiCreditCard1 } from 'react-icons/ci'
import { FaWpforms } from 'react-icons/fa'
// mercado-pago-sdk
import MercadoPago from './methods/MercadoPago/MercadoPago'
import Tarjetas from './methods/Tarjetas/Tarjetas'
import Spinner from '../../components/Spinner/Spinner'
const Checkout = () => {
  const { items } = useSelector(state => state.cart)
  const { buyer } = useSelector(state => state.buyer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [processPayment, setProcessPayment] = useState(false)
  const [stepActual, setStepActual] = useState(0)
  const [methodActual, setMethodActual] = useState(undefined)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [address, setAddress] = useState('')
  const [depto, setDepto] = useState('')
  const [code, setCode] = useState('')
  const [province, setProvince] = useState('')
  const [numberPhone, setNumberPhone] = useState('')

  const loadData = () => {
    setEmail(buyer.email)
    setName(buyer.name)
    setSurname(buyer.surname)
    setAddress(buyer.address)
    setDepto(buyer.depto)
    setCode(buyer.code)
    setProvince(buyer.province)
    setNumberPhone(buyer.numberPhone)
  }

  const saveForm = e => {
    e.preventDefault()
    const payment = {
      email: email,
      name: name,
      surname: surname,
      address: address,
      depto: depto,
      code: code,
      province: province,
      numberPhone: numberPhone
    }

    dispatch(saveData(payment))

    setStepActual(1)
  }

  const showCart = () => {
    if (document.querySelector('.card-cart')?.classList.contains('show-cart')) {
      document.querySelector('.card-cart')?.classList.remove('show-cart')
    } else {
      document.querySelector('.card-cart')?.classList.add('show-cart')
    }
  }

  const makeOrder = async () => {
    setProcessPayment(true)
    if (items && buyer) {
      const response = await paymentService.makeOrder(
        items,
        buyer,
        'transferencia'
      )
      if (response.status === 200) {
        setProcessPayment(false)
        navigate('/checkout/transferencia')
      }
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    document.title = `${
      stepActual === 0 ? 'Contacto' : 'Pago'
    } - Colibri Premium`
  }, [stepActual])

  return (
    <div className='container-checkout'>
      <header>
        <img className='logo' src={images.Logo} alt='' />
      </header>

      <div className='checkout'>
        {stepActual === 0 && <h1>Datos de Contacto</h1>}
        {stepActual === 1 && <h1>Medios de Pago</h1>}
        <div className='form-cart'>
          {stepActual === 0 && (
            <>
              <form onSubmit={e => saveForm(e)} className='form'>
                <div className='input-group'>
                  <label htmlFor='email'>Correo Electrónico</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder='jhondoe@gmail.com'
                    required
                  />
                </div>
                <div className='inputs'>
                  <div className='input-group'>
                    <label htmlFor='name'>Nombre</label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      onChange={e => setName(e.target.value)}
                      value={name}
                      placeholder='Jhon'
                      required
                    />
                  </div>
                  <div className='input-group'>
                    <label htmlFor='surname'>Apellido</label>
                    <input
                      type='text'
                      name='surname'
                      id='surname'
                      onChange={e => setSurname(e.target.value)}
                      value={surname}
                      placeholder='Doe'
                      required
                    />
                  </div>
                </div>
                <div className='input-group'>
                  <label htmlFor='address'>Dirección y Altura</label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                    placeholder='Av. Rivadavia'
                    required
                  />
                </div>

                <div className='inputs'>
                  <div className='input-group'>
                    <label htmlFor='depto'>Depto</label>
                    <input
                      type='text'
                      name='depto'
                      id='depto'
                      onChange={e => setDepto(e.target.value)}
                      value={depto}
                      placeholder='PB A'
                      required
                    />
                  </div>
                  <div className='input-group'>
                    <label htmlFor='code'>C. Postal</label>
                    <input
                      type='text'
                      name='code'
                      id='code'
                      onChange={e => setCode(parseInt(e.target.value))}
                      value={code}
                      placeholder='1111'
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                <div className='input-group'>
                  <label htmlFor='province'>Provincia</label>
                  <SelectProvinces setProvince={setProvince} />
                </div>
                <div className='input-group'>
                  <label htmlFor='numtel'>Número de Teléfono</label>
                  <input
                    type='number'
                    name='numtel'
                    id='numtel'
                    onChange={e => setNumberPhone(parseInt(e.target.value))}
                    value={numberPhone}
                    placeholder='11 2233 4455'
                    maxLength={15}
                    required
                  />
                </div>

                <div className='actions'>
                  <Link to={'/productos'} className='back'>
                    <img src={images.ArrowIcon} alt='' /> VOLVER
                  </Link>
                  <button type='submit' className='continue'>
                    CONTINUAR COMPRA
                  </button>
                </div>
              </form>
            </>
          )}
          {stepActual === 1 && methodActual === undefined && (
            <>
              <div className='payments'>
                <h3>Elige una forma de pago</h3>
                <div
                  onClick={() => setMethodActual('mercadopago')}
                  className='payment'
                >
                  <img src={images.LogoMercadoPago} alt='' />
                  <h4>Mercado Pago</h4>
                </div>
                <div
                  onClick={() => setMethodActual('tarjeta')}
                  className='payment'
                >
                  <img src={images.LogoMasterCard} alt='' />
                  <h4>Tarjeta de Crédito/Débito</h4>
                </div>
                <div
                  onClick={() => {
                    if (!processPayment) {
                      makeOrder()
                    }
                  }}
                  className={`payment ${
                    processPayment ? 'payment-processing' : ''
                  }`}
                >
                  <img src={images.LogoTransferencia} alt='' />
                  <h4>Transferencia</h4>
                  {processPayment && (
                    <div className='processing-loader'>
                      <Spinner />
                    </div>
                  )}
                </div>
                <button onClick={() => setStepActual(0)} className='back'>
                  <img src={images.ArrowIcon} alt='' />
                  VOLVER
                </button>
              </div>
            </>
          )}
          {stepActual === 1 && methodActual === 'mercadopago' && (
            <>
              <MercadoPago setMethodActual={setMethodActual} />
            </>
          )}

          {stepActual === 1 && methodActual === 'tarjeta' && (
            <>
              <Tarjetas setMethodActual={setMethodActual} />
            </>
          )}

          <CartPayment />
          <button onClick={() => showCart()} type='button' className='see-cart'>
            VER CARRITO
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
