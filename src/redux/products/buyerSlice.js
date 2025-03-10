import { createSlice } from '@reduxjs/toolkit'

const initial = {
  email: '',
  name: '',
  surname: '',
  address: '',
  depto: '',
  code: '',
  province: '',
  numberPhone: ''
}

const obtenerDatosCliente = () => {
  const buyer = sessionStorage.getItem('buyer')
  return buyer ? JSON.parse(buyer) : initial
}

const initialState = {
  buyer: obtenerDatosCliente()
}

const buyerSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {
    saveData: (state, action) => {
      const dataBuyer = action.payload

      state.buyer.email = dataBuyer.email
      state.buyer.name = dataBuyer.name
      state.buyer.surname = dataBuyer.surname
      state.buyer.address = dataBuyer.address
      state.buyer.depto = dataBuyer.depto
      state.buyer.code = dataBuyer.code
      state.buyer.province = dataBuyer.province
      state.buyer.numberPhone = dataBuyer.numberPhone

      sessionStorage.setItem('buyer', JSON.stringify(state.buyer))
    }
  }
})

export const { saveData } = buyerSlice.actions

export default buyerSlice.reducer
