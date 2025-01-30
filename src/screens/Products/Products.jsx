import React, { useEffect, useState } from 'react'
import './products.css'

import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'
import CardProduct from '../../components/CardProduct/CardProduct'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import ArrowBlack from '../../assets/icons/arrow-black.svg'
import RectangleExample from '../../assets/rectangle.svg'
import { productService } from '../../services/product.service'
const Products = () => {
  const [socials] = useState({
    wpp: 'https://api.whatsapp.com/send?phone=5491161670393&text=Hola%2C+buenas+tardes%21+Tengo+una+consulta',
    ig: 'https://www.instagram.com/colibri_premium/',
    fb: ''
  })

  const [filters] = useState([
    {
      name: 'Alimentación',
      value: 'alimentacion'
    },
    {
      name: 'Auriculares / Audio',
      value: 'audio'
    },
    {
      name: 'Cables',
      value: 'cables'
    },
    {
      name: 'Fundas',
      value: 'fundas'
    }
  ])
  const [loader, setLoader] = useState(false)
  const [productsOriginal, setProductsOriginal] = useState([])
  const [products, setProducts] = useState([])

  const [pages, setPages] = useState(0)
  const [pageActual, setPageActual] = useState(1)

  const [filterActual, setFilterActual] = useState([])

  const filterProduct = filter => {
    let copyFilter = [...filterActual]

    const filterExists = copyFilter.filter(copyF => copyF === filter)

    if (filterExists.length > 0) {
      const removeFilter = copyFilter.filter(copyF => copyF !== filter)
      setFilterActual(removeFilter)
    } else {
      copyFilter.push(filter)

      setFilterActual(copyFilter)
    }
  }

  const getProducts = async () => {
    const response = await productService.getAllProducts(pageActual)
    if (response.status === 200) {
      setProducts(response.data.productos)
      setPages(response.data.cantPaginas)
    }
    setTimeout(() => {
      setLoader(true)
    }, 800)
  }

  const getProductByCategory = async () => {
    const response = await productService.getProductsByCategory(
      filterActual,
      pageActual
    )

    if (response.status === 200) {
      setProducts(response.data.productos)
      setPages(response.data.cantPaginas)
    }
    setTimeout(() => {
      setLoader(true)
    }, 800)
  }

  useEffect(() => {
    // hacer consulta a la base de datos con estos productos en esta pagina.

    if (filterActual.length > 0) {
      getProductByCategory()
    } else {
      getProducts()
    }
  }, [pageActual])

  useEffect(() => {
    if (filterActual.length > 0) {
      getProductByCategory()
    } else {
      setPageActual(1)
      //buscamos todos los productos devuelta
      getProducts()
    }
  }, [filterActual])
  return (
    <div className='products'>
      <Header />
      <div className='container-products'>
        <BtnWhatsapp linkWpp={socials.wpp} />

        <h1 className='animate__animated animate__fadeIn animate__delay-01s'>
          Productos
        </h1>

        <div className='filters-products'>
          <div className='filters'>
            <h2 className='animate__animated animate__fadeIn animate__delay-02s'>
              Filtros
            </h2>
            {filters.map((filter, keyFilter) => (
              <div
                key={keyFilter}
                className={`filter-item animate__animated animate__fadeIn animate__delay-0${
                  keyFilter + 1
                }s`}
              >
                <input
                  type='checkbox'
                  name='filter'
                  id={filter.name}
                  value={filter.value}
                  onChange={() => filterProduct(filter.value)}
                />
                <label htmlFor={filter.name}>{filter.name}</label>
              </div>
            ))}
          </div>
          <div className='section-products'>
            <div className='list-products'>
              {products.map((product, keyProducto) => (
                <CardProduct key={keyProducto} product={product} />
              ))}
            </div>
            <div className='pagination'>
              {pageActual !== 1 && (
                <button
                  className='arrows'
                  onClick={() => setPageActual(pageActual - 1)}
                  disabled={pageActual === 1}
                >
                  <img src={ArrowBlack} alt='' />
                </button>
              )}
              {Array.from({ length: pages }).map((_, keyPage) => (
                <div
                  key={keyPage}
                  className={`page-item ${
                    pageActual === keyPage + 1 ? 'focus' : ''
                  }`}
                  onClick={() => setPageActual(keyPage + 1)}
                >
                  <h5>{keyPage + 1}</h5>
                </div>
              ))}

              {pages > 1 && (
                <button
                  className='arrows'
                  onClick={() => setPageActual(pageActual + 1)}
                  disabled={pageActual === pages}
                >
                  <img src={ArrowBlack} alt='' />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer socials={socials} />
    </div>
  )
}

export default Products
