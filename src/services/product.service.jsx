import axios from 'axios'

const urlBase = process.env.REACT_APP_URL_BACKEND_BASE

const getProductById = async id => {
  let url = `${urlBase}${process.env.REACT_APP_URL_PRODUCTS}`

  url = url.replace(':id', id)
  url = url.replace(':accion', 'productById')

  const response = await axios.get(url)

  return response
}

const getAllProducts = async () => {
  let url = `${urlBase}${process.env.REACT_APP_URL_PRODUCTS}`
  url = url.replace(':accion', 'allProducts')
  url = url.replace(':pagina', 1)

  const response = await axios.get(url)

  return response
}

export const productService = {
  getProductById,
  getAllProducts
}
