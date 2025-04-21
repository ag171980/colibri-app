import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import NumberFormat from 'react-number-format'

import { productService } from '../../services/product.service'
import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'

import IconBack from '../../assets/icons/back.svg'
import RectangleExample from '../../assets/rectangle.svg'

import './product.css'
import NotableProducts from '../../components/NotableProducts/NotableProducts'
import Loader from '../../components/Loader/Loader'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/products/cartSlice'
import CustomAlert from '../../components/Alert/Alert'

const Product = () => {
  const path = useParams()
  const dispatch = useDispatch()

  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState(undefined)
  const [productsRecommendeds, setProductsRecommendeds] = useState([])
  const [product, setProduct] = useState(undefined)

  const getProductById = async () => {
    const response = await productService.getProductById(path.id)
    if (response.status === 200) {
      setProduct(response.data.producto)
    }
    setTimeout(() => {
      setLoader(true)
    }, 800)
  }

  const addCart = product => {
    let productFormatted = {
      id: product.id,
      image: product.imagen[0],
      nombre: product.nombre,
      categoria: product.categoria,
      precio: parseInt(product.precio),
      stock: product.stock,
      cantidad: 1
    }
    setAlert({ msg: 'Producto agregado al carrito', variant: 'success' })
    dispatch(addToCart(productFormatted))
    setTimeout(() => {
      setAlert(undefined)
    }, 4000)
  }
  useEffect(() => {
    getProductById()
  }, [])
  useEffect(() => {
    document.title = `${product?.nombre} - Colibri Premium`
  }, [product])
  return (
    <>
      {alert && <CustomAlert alert={alert} />}
      <div className='product'>
        <Header />

        <div className='container-product'>
          <a href='/productos' className='btn-back'>
            <img src={IconBack} alt='' />
          </a>
          <BtnWhatsapp linkWpp={socials.wpp} />

          <h1 className='animate__animated animate__fadeIn animate__delay-01s'>
            Productos
          </h1>

          {!loader && <Loader />}
          {loader && (
            <div className='product-detail'>
              <div className='images'>
                <div className='others'>
                  {product.imagen.length > 0 &&
                    product.imagen.map((img, keyImg) => {
                      if (keyImg !== 0) {
                        return (
                          <img
                            className='animate__animated animate__fadeIn animate__delay-01s'
                            key={keyImg}
                            src={
                              img
                                ? `${process.env.REACT_APP_URL_BACKEND_BASE}/${img}`
                                : RectangleExample
                            }
                            alt=''
                          />
                        )
                      }
                    })}
                  {product.imagen.length === 0 && (
                    <>
                      <img
                        className='animate__animated animate__fadeIn animate__delay-02s'
                        src={RectangleExample}
                        alt=''
                      />
                      <img
                        className='animate__animated animate__fadeIn animate__delay-03s'
                        src={RectangleExample}
                        alt=''
                      />
                      <img
                        className='animate__animated animate__fadeIn animate__delay-04s'
                        src={RectangleExample}
                        alt=''
                      />
                    </>
                  )}
                </div>
                <img
                  className='principal animate__animated animate__fadeIn animate__delay-01s'
                  src={
                    product.imagen[0]
                      ? `${process.env.REACT_APP_URL_BACKEND_BASE}/${product.imagen[0]}`
                      : RectangleExample
                  }
                  alt=''
                />
              </div>
              <div className='description-product'>
                <h2 className='animate__animated animate__fadeIn animate__delay-02s'>
                  {product.nombre}
                </h2>
                <NumberFormat
                  className='price animate__animated animate__fadeIn animate__delay-02s'
                  value={product.precio}
                  thousandSeparator='.'
                  decimalSeparator=','
                  disabled
                  prefix='$'
                />
                <div className='free-shipping animate__animated animate__fadeIn animate__delay-03s'>
                  <p>Envío gratis</p>
                </div>
                <h4 className='animate__animated animate__fadeIn animate__delay-04s'>
                  Descripción del producto
                </h4>
                <p className='description animate__animated animate__fadeIn animate__delay-05s'>
                  {product.descripcion}
                </p>

                <button
                  onClick={() => addCart(product)}
                  type='button'
                  className='btn-buy animate__animated animate__fadeIn animate__delay-06s'
                >
                  Agregar
                </button>
              </div>
            </div>
          )}

          <div className='recommendations'>
            <h2>Recomendados</h2>
            <NotableProducts listProducts={productsRecommendeds} />
          </div>
          <div className='tyc'>
            <h2>Términos y Condiciones</h2>
            <div className='card-tyc'>
              <h3>Garantía de Accesorios</h3>
              <p>
                Los accesorios como cables de carga o cargadores/Adaptadores
                cuentan con 30 días de garantía, siempre y cuando no presenten
                daños físicos y se devuelvan en su estado original con la caja.
                Al utilizar los servicios de Colibri Premium Service, aceptas y
                reconoces que has leído y comprendido todos los términos y
                condiciones aquí mencionados. Este consentimiento informado
                tiene como objetivo garantizar una relación transparente y
                confiable entre nosotros y nuestros valiosos clientes,nos
                comprometemos a brindarte una experiencia transparente y
                satisfactoria. ¡Gracias por confiar en nosotros para todas tus
                necesidades!
              </p>
            </div>
          </div>
        </div>

        <Footer socials={socials} />
      </div>
    </>
  )
}

export default Product
