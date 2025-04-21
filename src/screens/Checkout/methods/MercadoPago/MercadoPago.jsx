import React, { useEffect, useState } from 'react'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

import { images } from '../../../../utils/functions/images'

import './MercadoPago.css'
import { useSelector } from 'react-redux'
import { paymentService } from '../../../../services/payment.service'
import Loader from '../../../../components/Loader/Loader'
import LoaderBtn from '../../../../components/LoaderBtn/LoaderBtn'
const MercadoPago = ({ setMethodActual }) => {
  const state = useSelector(state => state)

  const [preferenceId, setPreferenceId] = useState('')
  const [statePreference, setStatePreference] = useState(false)

  const createPreference = async () => {
    if (state.cart && state.buyer && state.buyer.buyer) {
      const response = await paymentService.getCreatePreferenceId(
        state.cart.items,
        state.buyer.buyer
      )
      setPreferenceId(response.id)
      setStatePreference(true)
    }
  }

  if (!statePreference) {
    createPreference()
  }

  useEffect(() => {
    if (process.env.REACT_APP_PUBLIC_KEY) {
      initMercadoPago(process.env.REACT_APP_PUBLIC_KEY, { locale: 'es-AR' })
    }
  }, [])

  return (
    <div className='payment-detail'>
      <button onClick={() => setMethodActual(undefined)}>
        <img src={images.ArrowIcon} alt='' /> VOLVER
      </button>
      <h3>Mercado Pago</h3>
      <p>
        Te redireccionaremos al sitio de <b>Mercado Pago</b>, donde podrás
        elegir uno de los medios de pago.
      </p>
      <div className='payment-images'>
        <img src={images.LogoMasterCard} alt='' />
        <img src={images.LogoVisa} alt='' />
        <img src={images.LogoAmerican} alt='' />
        <img src={images.LogoNaranja} alt='' />
        <img src={images.LogoCabal} alt='' />
        <img src={images.LogoMaestro} alt='' />
        <img src={images.LogoDiners} alt='' />
        <img src={images.LogoNativa} alt='' />
        <img src={images.LogoArgencard} alt='' />
        <img src={images.LogoPagoFacil} alt='' />
        <img src={images.LogoRapiPago} alt='' />
      </div>
      {preferenceId ? (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      ) : (
        <LoaderBtn />
      )}
    </div>
  )
}

export default MercadoPago
