import './index.css'

import RectangleExample from '../../assets/rectangle.svg'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OurServices from './OurServices'
import NotableProducts from '../../components/NotableProducts/NotableProducts'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'
import { useState } from 'react'

const Index = () => {
  const { width } = useWindowDimensions()
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })
  const products = []
  return (
    <div className='index'>
      <Header />
      <div className='container-index'>
        <BtnWhatsapp linkWpp={socials.wpp} />
        <div className='home'>
          <h2>Bienvenido/a a</h2>
          <h1>
            Colibrí <span>Premium Service</span>
          </h1>

          <button className='btn-contact'>¡Contactános!</button>
        </div>

        <OurServices form={false} />

        <div className='container-notable-products'>
          <h2>Productos Destacados</h2>
          {/* <NotableProducts listProducts={products} categoryName={'Fundas'} /> */}

          <NotableProducts listProducts={products} categoryName={'Cables'} />
        </div>
        <div className='container-regards'>
          <div className='regards'>
            <p>
              Gracias por confiar en nosotros para las necesidades de reparación
              y accesorios de tus dispositivos.{' '}
              {width < 768 ? (
                <>
                  <br />
                  <br />
                </>
              ) : (
                <></>
              )}{' '}
              Colibri Premium Service nos esforzamos por brindar un servicio
              excepcional y accesorios de calidad para garantizar tu
              satisfacción.{' '}
              {width < 768 ? (
                <>
                  <br />
                  <br />
                </>
              ) : (
                <></>
              )}{' '}
              Es importante que revises detenidamente los siguientes términos y
              condiciones antes de utilizar nuestros servicios.
            </p>
          </div>
        </div>
      </div>
      <Footer socials={socials} />
    </div>
  )
}

export default Index
