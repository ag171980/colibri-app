import axios from 'axios'

const urlBase = process.env.REACT_APP_URL_BACKEND_BASE

const getFaqs = async () => {
  let url = `${urlBase}${process.env.REACT_APP_URL_INIT}`

  url = url.replace(':accion', 'getFaqs')

  const response = await axios.get(url)

  return response
}

export const initService = {
  getFaqs
}
