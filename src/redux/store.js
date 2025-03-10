import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './products/cartSlice'
import buyerReducer from './products/buyerSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    buyer: buyerReducer
  }
})

export default store
