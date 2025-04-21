import React, { useState, useEffect } from 'react'

import { images } from '../../../../utils/functions/images'
import { useNavigate } from 'react-router-dom'
import {
  initMercadoPago,
  getIdentificationTypes,
  getInstallments,
  getIssuers
} from '@mercadopago/sdk-react'
import createCardToken from '@mercadopago/sdk-react/coreMethods/cardToken/create'
import { IMaskInput } from 'react-imask'

import './Tarjetas.css'
import { useSelector } from 'react-redux'
import { paymentService } from '../../../../services/payment.service'
import ModalConfirm from '../../../../components/ModalConfirm/ModalConfirm'

const Tarjetas = ({ setMethodActual }) => {
  const { items } = useSelector(state => state.cart)
  const { buyer } = useSelector(state => state.buyer)

  const navigate = useNavigate()

  const [modal, setModal] = useState()
  const [message, setMessage] = useState()
  const [enablePayment, setEnablePayment] = useState(true)
  // Card information
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpirationMonth, setCardExpirationMonth] = useState()
  const [cardExpirationYear, setCardExpirationYear] = useState()
  const [securityCode, setSecurityCode] = useState()
  const [identificationNumber, setIdentificationNumber] = useState()
  const [totalCart, setTotalCart] = useState(
    items.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0)
  )
  const [loadMP, setLoadMP] = useState(false)
  const [dniTypes, setDniTypes] = useState()
  const [errorCard, setErrorCard] = useState('')
  const [listPayerCost, setListPayerCost] = useState()
  const [installments, setInstallments] = useState(1)
  const [paymentMethodId, setPaymentMethodId] = useState('')
  const [issuerId, setIssuerId] = useState('')
  const [bin, setBin] = useState('')
  const [thumbnailCard, setThumbnailCard] = useState()
  const [identification, setIdentification] = useState({
    id: 'DNI',
    name: 'DNI',
    type: 'number',
    min_length: 7,
    max_length: 8
  })

  const chargeMethods = async () => {
    if (process.env.REACT_APP_PUBLIC_KEY) {
      initMercadoPago(process.env.REACT_APP_PUBLIC_KEY)
    }
    const identificationTypes = await getIdentificationTypes()
    setDniTypes(identificationTypes)
    // console.log(identificationTypes);
  }
  if (!loadMP) {
    chargeMethods()
    setLoadMP(true)
  }

  const createPayment = async e => {
    e.preventDefault()
    console.log('Creando tu pago...')
    setMessage({
      description: 'Procesando pago...',
      status: 1000
    })

    modal?.classList.add('show-modal')
    if (
      cardNumber &&
      cardName &&
      cardExpirationMonth &&
      cardExpirationYear &&
      securityCode &&
      identification.name &&
      identificationNumber
    ) {
      const cardToken = await createCardToken({
        cardNumber: cardNumber.replace(/ /g, ''),
        cardholderName: cardName,
        cardExpirationMonth: String(cardExpirationMonth),
        cardExpirationYear: String(cardExpirationYear),
        securityCode: String(securityCode),
        identificationType: identification.name,
        identificationNumber: String(identificationNumber)
      }).catch(err => {
        console.log(err)
      })

      if (cardToken && totalCart) {
        const response = await paymentService.processPayment(
          cardToken.id,
          totalCart,
          paymentMethodId,
          'Compra de prueba',
          buyer.email,
          identification.id,
          identificationNumber,
          installments,
          issuerId
        )
        setTimeout(async () => {
          if (response.status === 'approved') {
            setMessage({
              description: 'Pago realizado con éxito',
              status: 200
            })
            const redirect = await paymentService.makeOrder(
              items,
              buyer,
              'tarjeta'
            )

            if (redirect.status === 200) {
              navigate('/pago/aprobado')
            }
          } else {
            setMessage({
              description: 'Error al realizar el pago',
              status: 400
            })
          }
        }, 2500)
      }
    }
  }

  useEffect(() => {
    console.log('entra?')

    const getAllInstallments = async () => {
      if (bin.length >= 7 && items) {
        const installs = await getInstallments({
          amount: totalCart.toString(),
          locale: 'es-AR',
          bin: bin.replace(/ /g, '')
        }).catch(() => {
          setErrorCard('Tarjeta no válida, ingrese otra')
        })
        console.log(installs)

        if (installs) {
          setErrorCard('')
          setPaymentMethodId(installs[0].payment_method_id)
          setListPayerCost(installs[0].payer_costs)
          setThumbnailCard(installs[0].issuer.thumbnail)

          const issuers = await getIssuers({
            paymentMethodId: installs[0].payment_method_id,
            bin: bin.replace(/ /g, '')
          }).catch(() => {
            setErrorCard('Tarjeta no válida, ingrese otra')
          })
          console.log(issuers)

          if (issuers) setIssuerId(issuers[0].id)
        }
      }
    }

    getAllInstallments()
  }, [bin])

  useEffect(() => {
    if (
      cardNumber &&
      cardName &&
      cardExpirationMonth &&
      cardExpirationYear &&
      securityCode &&
      identification.name &&
      identificationNumber
    ) {
      setEnablePayment(false)
    }
  }, [
    cardNumber,
    cardName,
    cardExpirationMonth,
    cardExpirationYear,
    securityCode,
    identification.name,
    identificationNumber
  ])

  useEffect(() => {
    if (document && document.querySelector('.container-modal-confirm')) {
      setModal(document?.querySelector('.container-modal-confirm'))
    }
  }, [message])

  useEffect(() => {
    modal?.classList.add('show-modal')
  }, [modal])

  return (
    <>
      {message && <ModalConfirm message={message} />}
      <div className='payment-detail'>
        <button onClick={() => setMethodActual(undefined)}>
          <img src={images.ArrowIcon} alt='' /> VOLVER
        </button>
        <h3>Tarjeta de Crédito/Débito</h3>
        <form onSubmit={e => createPayment(e)} className='pay-form'>
          <div className='input-group'>
            <label htmlFor='email'>Correo Electrónico</label>
            <input
              type='email'
              name='email'
              id='form-checkout__cardholderEmail'
              placeholder='jhondoe@gmail.com'
              value={buyer.email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='Numero'>Numero de Tarjeta</label>

            <IMaskInput
              className={`${errorCard ? 'error-input' : ''}`}
              mask='0000 0000 0000 0000'
              placeholder='5522 5001 1234 9881'
              onAccept={value => {
                setCardNumber(value)
                if (value.length >= 7) {
                  setBin(value)
                }
              }}
            />
            {thumbnailCard && (
              <img src={thumbnailCard} width={40} height={30} />
            )}
            {errorCard && <small style={{ color: 'red' }}>{errorCard}</small>}
          </div>
          <div className='inputs'>
            <div className='input-group'>
              <label htmlFor='name'>Nombre</label>
              <input
                type='text'
                name='name'
                onChange={e => setCardName(e.target.value)}
                id='form-checkout__cardholderName'
                placeholder='Jhon Doe'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='month_card'>MM</label>
              <IMaskInput
                min={1}
                max={12}
                mask='00'
                placeholder='05'
                maxLength={2}
                onChange={e => setCardExpirationMonth(parseInt(e.target.value))}
                name='month_card'
                id='form-checkout__cardExpirationMonth'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='year_card'>AA</label>
              <IMaskInput
                min={24}
                mask='00'
                placeholder='30'
                maxLength={2}
                onChange={e => setCardExpirationYear(parseInt(e.target.value))}
                name='year_card'
                id='form-checkout__cardExpirationYear'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='code_card'>CCV</label>
              <IMaskInput
                min={100}
                mask='0000'
                placeholder='1234'
                maxLength={4}
                onChange={e => setSecurityCode(parseInt(e.target.value))}
                name='code_card'
                id='form-checkout__securityCode'
              />
            </div>
          </div>
          <div className='input-group'>
            <label htmlFor=''>Cuotas</label>
            <select
              name='installments'
              id='form-checkout__installments'
              onChange={e => setInstallments(parseInt(e.target.value))}
            >
              {listPayerCost?.map((payerCost, key) => (
                <option key={key} value={payerCost.installments}>
                  {payerCost.recommended_message}
                </option>
              ))}
            </select>
          </div>
          <div className='input-group'>
            <label htmlFor='Numero'>Documento</label>
            <div className='inputs'>
              <select
                name='identificationType'
                id='form-form-checkout__identificationType'
              >
                {dniTypes?.map((type, key) => (
                  <option
                    key={key}
                    onClick={() => {
                      setIdentification(type)
                    }}
                  >
                    {type.name}
                  </option>
                ))}
              </select>
              <IMaskInput
                min={identification?.min_length}
                max={identification?.max_length}
                mask='00000000'
                placeholder='11222333'
                minLength={identification?.min_length}
                maxLength={identification?.max_length}
                onChange={e =>
                  setIdentificationNumber(parseInt(e.target.value))
                }
                name='identificationNumber'
                className='input-checkout numero-dni'
                id='form-checkout__identificationNumber'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            id='form-checkout__submit'
            className='pay-purchase'
            disabled={enablePayment}
          >
            PAGAR
          </button>
        </form>
      </div>
    </>
  )
}

export default Tarjetas
