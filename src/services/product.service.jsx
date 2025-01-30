import axios from 'axios'

const urlBase = process.env.REACT_APP_URL_BACKEND_BASE

const getProductById = async id => {
  let url = `${urlBase}${process.env.REACT_APP_URL_PRODUCTS}`

  url = url.replace(':id', id)
  url = url.replace(':accion', 'productById')

  const response = await axios.get(url)

  return response
}

const getAllProducts = async (page) => {
  let url = `${urlBase}${process.env.REACT_APP_URL_PRODUCTS}`
  url = url.replace(':accion', 'allProducts')
  url = url.replace(':pagina', page)

  const response = await axios.get(url)

  return response
}

const getProductsByCategory = async (filter, page) => {
  let url = `${urlBase}${process.env.REACT_APP_URL_PRODUCTS}`
  url = url.replace(':accion', 'productsByCategory')
  url = url.replace(':pagina', page ? page : 1)
  url += `&categoria=${filter}`

  const response = await axios.get(url)

  return response
}

export const productService = {
  getProductById,
  getProductsByCategory,
  getAllProducts
}
