import React, { useState } from 'react'

import IconIPhone from '../../assets/icons/iphone.svg'
import IconMacbook from '../../assets/icons/macbook.svg'
import IconIPad from '../../assets/icons/ipad.svg'
import IconAppleWatch from '../../assets/icons/apple-watch.svg'
import IconPhoneTitle from '../../assets/icons/phone-title.svg'

import './ourServices.css'
const OurServices = ({ form }) => {
  const [consult, setConsult] = useState('')
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
    window.open(
      `https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta%3A%20${consult}`,
      '_blank'
    )
  }
  return (
    <div className='container-our-services'>
      <h2 className='animate__animated animate__fadeIn animate__delay-01s'>
        Nuestros servicios
      </h2>
      <h3 className='animate__animated animate__fadeIn animate__delay-02s'>
        Servicio puerta a puerta <img src={IconPhoneTitle} alt='' />
      </h3>
      {form && (
        <div className='form-doubt'>
          <h4 className='animate__animated animate__fadeIn animate__delay-03s'>
            Cuéntanos qué sucede
          </h4>
          <form onSubmit={e => consultDoubt(e)}>
            <input
              onChange={e => setConsult(e.target.value)}
              className='animate__animated animate__fadeIn animate__delay-03s'
              type='text'
              name='answer'
              placeholder='Ejemplo: Mi iPhone no enciende'
              required
            />
            <button
              type='submit'
              className='animate__animated animate__fadeIn animate__delay-04s'
            >
              Enviar
            </button>
          </form>
        </div>
      )}
      <p className='animate__animated animate__fadeIn animate__delay-04s'>
        Reparaciones
      </p>
      <div className='services'>
        {services.map((service, key) => (
          <div
            key={key}
            className={`service animate__animated animate__fadeIn animate__delay-0${
              key + 1
            }s`}
          >
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
