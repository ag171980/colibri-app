import React, { useEffect, useState } from 'react'
import './products.css'

import BtnWhatsapp from '../../components/BtnWhatsapp/BtnWhatsapp'
import CardProduct from '../../components/CardProduct/CardProduct'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import ArrowBlack from '../../assets/icons/arrow-black.svg'
import RectangleExample from '../../assets/rectangle.svg'
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
      value: 'auriculares'
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
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 2,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 3,
      title: 'alimentacion lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    },
    {
      id: 4,
      title: 'auriculares lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'auriculares',
      img: RectangleExample
    },
    {
      id: 5,
      title: 'fundas lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'fundas',
      img: RectangleExample
    },
    {
      id: 6,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 7,
      title: 'Alimentacion (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    },
    {
      id: 5,
      title: 'fundas lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'fundas',
      img: RectangleExample
    },
    {
      id: 6,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 7,
      title: 'Alimentacion (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    },
    {
      id: 5,
      title: 'fundas lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'fundas',
      img: RectangleExample
    },
    {
      id: 6,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 7,
      title: 'Alimentacion (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    },
    {
      id: 5,
      title: 'fundas lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'fundas',
      img: RectangleExample
    },
    {
      id: 6,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 7,
      title: 'Alimentacion (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    },
    {
      id: 5,
      title: 'fundas lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'fundas',
      img: RectangleExample
    },
    {
      id: 6,
      title: 'Cable lightning a usb de (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'cables',
      img: RectangleExample
    },
    {
      id: 7,
      title: 'Alimentacion (1m)',
      price: 30000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      available: true,
      category: 'alimentacion',
      img: RectangleExample
    }
  ])

  const [pages, setPages] = useState(Math.ceil(products.length / 6))
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

  useEffect(() => {
    // hacer consulta a la base de datos con estos productos en esta pagina.
  }, [pageActual])

  useEffect(() => {
    if (filterActual.length > 0) {
      let copyProducts = []

      filterActual.map(filter => {
        let productsFiltereds = products.filter(
          product => product.category === filter
        )

        copyProducts.push(...productsFiltereds)
      })

      setProducts(copyProducts)
      setPages(Math.ceil(copyProducts.length / 6))
      setPageActual(1)
    } else {
      //buscamos todos los productos devuelta
    }
  }, [filterActual])
  return (
    <div className='products'>
      <Header />
      <div className='container-products'>
        <BtnWhatsapp linkWpp={socials.wpp} />

        <h1>Productos</h1>

        <div className='filters-products'>
          <div className='filters'>
            <h2>Filtros</h2>
            {filters.map((filter, keyFilter) => (
              <div key={keyFilter} className='filter-item'>
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
              <button
                className='arrows'
                onClick={() => setPageActual(pageActual - 1)}
                disabled={pageActual === 1}
              >
                <img src={ArrowBlack} alt='' />
              </button>

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

              {pages > 3 && (
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
