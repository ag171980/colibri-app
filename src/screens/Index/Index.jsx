import { useEffect, useState } from 'react'
// components
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OurServices from './OurServices'
import NotableProducts from '../../components/NotableProducts/NotableProducts'
// hooks
import useWindowDimensions from '../../hooks/useWindowDimensions'
// services
import { productService } from '../../services/product.service'
// styles
import './index.css'
const Index = () => {
  const { width } = useWindowDimensions()
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })
  const [loader, setLoader] = useState(false)
  const [pages, setPages] = useState(0)
  const [products, setProducts] = useState(undefined)
  const [productsOriginal, setProductsOriginal] = useState([])

  useEffect(() => {
    async function fetchData () {
      const response = await productService.getAllProducts()
      if (response.status === 200) {
        setProducts(response.data.productos)
        setProductsOriginal(response.data.productos)
        setPages(response.data.cantPaginas)
      }
      setTimeout(() => {
        setLoader(true)
      }, 800)
    }
    fetchData()
  }, [])
  return (
    <div className='index'>
      <Header />
      <div className='container-index'>
        <BtnWhatsapp linkWpp={socials.wpp} />
        <div className='home'>
          <h2 className='animate__animated animate__fadeIn animate__delay-01s'>
            Bienvenido/a a
          </h2>
          <h1 className='animate__animated animate__fadeIn animate__delay-02s'>
            Colibrí <span>Premium Service</span>
          </h1>

          <a
            href={socials.wpp}
            target='_blank'
            className='btn-contact animate__animated animate__fadeIn animate__delay-03s'
          >
            ¡Contactános!
          </a>
        </div>

        <OurServices form={false} />

        <div className='container-notable-products'>
          <h2 className='animate__animated animate__fadeIn animate__delay-01s'>
            Productos Destacados
          </h2>
          {/* <NotableProducts listProducts={products} categoryName={'Fundas'} /> */}

          {products && (
            <NotableProducts listProducts={products} categoryName={'fundas'} />
          )}
        </div>
        <div className='container-regards'>
          <div className='regards'>
            <p className='animate__animated animate__fadeIn animate__delay-01s'>
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
