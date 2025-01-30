import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTotalCart: (state, action) => {
      return state.cart.length
    }
  }
})

export const { getTotalCart } = cartSlice.actions

export default cartSlice.reducer
