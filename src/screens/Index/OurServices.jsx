import React from 'react'

import IconIPhone from '../../assets/icons/iphone.svg'
import IconMacbook from '../../assets/icons/macbook.svg'
import IconIPad from '../../assets/icons/ipad.svg'
import IconAppleWatch from '../../assets/icons/apple-watch.svg'
import IconPhoneTitle from '../../assets/icons/phone-title.svg'

import './ourServices.css'
const OurServices = ({ form }) => {
  const services = [
    {
      img: IconIPhone,
      nameService: 'IPhone',
      description:
        'Cambio de batería, cambio de pantalla, reparación de placa, y cambio de glass'
    },
    {
      img: IconMacbook,
      nameService: 'Macbook',
      description:
        'Cambio de batería, cambio de pantalla, reparación de teclado, y rerparación de placa'
    },
    {
      img: IconIPad,
      nameService: 'IPad',
      description:
        'Cambio de pantalla, cambio de batería, reparación de placa, y cambio de glass'
    },
    {
      img: IconAppleWatch,
      nameService: 'Apple Watch',
      description: 'Cambio de batería, cambio de pantalla, y cambio de glass'
    }
  ]
  const consultDoubt = e => {
    e.preventDefault()
  }
  return (
    <div className='container-our-services'>
      <h2>Nuestros servicios</h2>
      <h3>
        Servicio puerta a puerta <img src={IconPhoneTitle} alt='' />
      </h3>
      {form && (
        <div className='form-doubt'>
          <h4>Cuéntanos qué sucede</h4>
          <form onSubmit={e => consultDoubt(e)}>
            <input
              type='text'
              name='answer'
              placeholder='Ejemplo: Mi iPhone no enciende'
              required
            />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      )}
      <p>Reparaciones</p>
      <div className='services'>
        {services.map((service, key) => (
          <div key={key} className='service'>
            <div className='icon-service'>
              <img src={service.img} alt='' />
            </div>
            <h4>{service.nameService}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
