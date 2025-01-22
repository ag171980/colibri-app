import React, { useEffect, useState } from 'react'
import CardProduct from '../CardProduct/CardProduct'

import ArrowLight from '../../assets/icons/arrow-light.svg'
import ArrowBlack from '../../assets/icons/arrow-black.svg'

import './notableProducts.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const NotableProducts = ({ listProducts, categoryName }) => {
  
  const { width } = useWindowDimensions()
  const [posCarousel, setPosCarousel] = useState(0)
  const [pos, setPos] = useState(1)
  const [products] = useState(
    categoryName
      ? listProducts.filter(product => product.categoria === categoryName)
      : listProducts
  )

  const [cantDivisions, setCantDivisions] = useState(
    Math.ceil(products.length / 3)
  )

  const changeCarousel = operation => {
    if (operation === 'add') {
      setPosCarousel(posCarousel - 100)
      setPos(pos + 1)
    } else {
      setPosCarousel(posCarousel + 100)
      setPos(pos - 1)
    }
  }
  useEffect(() => {
    if (width < 950) {
      setCantDivisions(Math.ceil(products.length / 2))
    } else {
      setCantDivisions(Math.ceil(products.length / 3))
    }
  }, [width])
  return (
    <div className='notable-products'>
      <p>{categoryName}</p>
      <div className='carousel-products'>
        <button
          onClick={() => changeCarousel('substraction')}
          className={`arrow arrow-left ${pos > 1 ? 'enabled' : 'disabled'}`}
          disabled={!(pos > 1)}
        >
          {pos > 1 ? (
            <img src={ArrowLight} alt='' />
          ) : (
            <img className='inverted' src={ArrowBlack} alt='' />
          )}
        </button>
        <div className='products'>
          <div
            className='products-line'
            style={{ left: `${posCarousel}%`, transition: '0.5s all' }}
          >
            {products.map((product, keyProduct) => (
              <CardProduct key={keyProduct} product={product} />
            ))}
          </div>
        </div>
        <button
          onClick={() => changeCarousel('add')}
          className={`arrow arrow-right ${
            pos < cantDivisions ? 'enabled' : 'disabled'
          }`}
          disabled={!(pos < cantDivisions)}
        >
          {pos < cantDivisions ? (
            <img src={ArrowLight} alt='' />
          ) : (
            <img className='inverted' src={ArrowBlack} alt='' />
          )}
        </button>
      </div>
    </div>
  )
}

export default NotableProducts
