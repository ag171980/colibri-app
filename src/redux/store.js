import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './products/cartSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default store
