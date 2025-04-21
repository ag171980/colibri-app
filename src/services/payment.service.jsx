import axios from 'axios'
const urlBase = process.env.REACT_APP_URL_BACKEND_BASE

const getCreatePreferenceId = async (cart, payment) => {
  if (urlBase && process.env.REACT_APP_CREATE_PREFERENCE_ID) {
    const url = `${urlBase}${process.env.REACT_APP_CREATE_PREFERENCE_ID}`

    const response = await axios.post(url, {
      productos: cart,
      comprador: payment
    })

    return response.data
  }
}

const makeOrder = async (cart, paymentClient, state) => {
  if (urlBase && process.env.REACT_APP_MAKE_ORDER) {
    const url = `${urlBase}${process.env.REACT_APP_MAKE_ORDER}${state}`

    const response = await axios.post(url, {
      productos: cart,
      comprador: paymentClient
    })

    return response.data
  }
}

const processPayment = async (
  token,
  amount,
  payment_method_id,
  description,
  email,
  type,
  dni,
  installments,
  issuerId
) => {
  if (urlBase && process.env.REACT_APP_PROCESS_PAYMENT) {
    const url = `${urlBase}${process.env.REACT_APP_PROCESS_PAYMENT}`

    const response = await axios.post(url, {
      token: token,
      amount: amount,
      payment_method_id: payment_method_id,
      description: description,
      payer: {
        email: email,
        identification: {
          type: type,
          dni: dni
        }
      },

      installments: installments,
      issuer_id: issuerId
    })

    return response.data
  }
}

const getDataTransfer = async () => {
  if (urlBase && process.env.REACT_APP_DATA_TRANSFER) {
    const url = `${urlBase}${process.env.REACT_APP_DATA_TRANSFER}`

    const response = await axios.get(url)

    return response.data
  }
}

export const paymentService = {
  makeOrder,
  processPayment,
  getCreatePreferenceId,
  getDataTransfer
}
