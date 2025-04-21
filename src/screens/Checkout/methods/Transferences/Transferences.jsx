import React, { useEffect, useState } from 'react'
import Logo from '../../../../assets/logo.svg'

import './Transferences.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartPayment from '../../../../components/CartPayment/CartPayment'
import { paymentService } from '../../../../services/payment.service'

const Transferences = () => {
  const { buyer } = useSelector(state => state.buyer)

  const [dataTransference, setDataTransference] = useState()
  const [statusData, setStatusData] = useState(false)

  const showCart = () => {
    if (document.querySelector('.card-cart')?.classList.contains('show-cart')) {
      document.querySelector('.card-cart')?.classList.remove('show-cart')
    } else {
      document.querySelector('.card-cart')?.classList.add('show-cart')
    }
  }
  const getDataTransfer = async () => {
    const response = await paymentService.getDataTransfer()
    console.log(response)

    if (response.status === 200) {
      setDataTransference(response.data)
      setStatusData(true)
    }
  }

  useEffect(() => {
    document.title = '¡Gracias por tu pedido!'
    if (!statusData) {
      getDataTransfer()
    }
  }, [])

  return (
    <div className='container-payment'>
      <header>
        <img className='logo' src={Logo} alt='' />
      </header>
      <div className='checkout'>
        <h1 className='animate__animated animate__fadeIn animate__delay-01s'>
          Medios de Pago
        </h1>
        <div className='payments-cart'>
          <div className='methods transferencia'>
            <h3 className='animate__animated animate__fadeIn animate__delay-02s'>
              Pedido reservado
            </h3>
            <p className='animate__animated animate__fadeIn animate__delay-02s'>
              Los datos para la transferencia son los siguientes:
            </p>
            <div className='animate__animated animate__fadeIn animate__delay-02s pay-data'>
              <p>
                <b>CBU:</b> {dataTransference?.cbu}
              </p>
              <p>
                <b>ALIAS:</b> {dataTransference?.alias}
              </p>
              <p>
                <b>Banco:</b> {dataTransference?.banco}
              </p>
              <p>
                <b>Cuenta a nombre de:</b> {dataTransference?.nombre_cuenta}
              </p>
            </div>
            <p className='animate__animated animate__fadeIn animate__delay-02s'>
              Una vez realizada la transferencia, por favor respondé a este
              correo con el comprobante de pago o envialo a
              soporte@colibri.com.ar. Apenas lo recibamos, procesaremos tu
              pedido 🙌
            </p>
            <div className='info-purchase'>
              <h4 className='animate__animated animate__fadeIn animate__delay-03s'>
                Información de tu pedido
              </h4>
              <div className='animate__animated animate__fadeIn animate__delay-03s info'>
                <h5>Email</h5>
                <p>{buyer?.email}</p>
              </div>
              <div className='animate__animated animate__fadeIn animate__delay-03s info'>
                <h5>Datos de Facturación</h5>
                <p>
                  {buyer?.name} {buyer?.surname}
                </p>
                <p>{buyer?.numberPhone}</p>
                <p>
                  {buyer?.address} {buyer?.depto}, {buyer?.province}, CP
                  {buyer?.code}
                </p>
              </div>
            </div>
            <Link className='continue' to={'/'}>
              VOLVER AL INICIO
            </Link>
          </div>
          <CartPayment />
          <button onClick={() => showCart()} type='button' className='see-cart'>
            VER CARRITO
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transferences
