import axios from 'axios'

const urlBase = process.env.REACT_APP_URL_BACKEND_BASE

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

export const paymentService = {
  makeOrder,
  processPayment
}
