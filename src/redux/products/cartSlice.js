import { createSlice } from '@reduxjs/toolkit'

const obtenerProductosDelCarrito = () => {
  const carrito = sessionStorage.getItem('cart')
  return carrito ? JSON.parse(carrito) : [] // Si no hay productos, devolvemos un array vacío
}

const initialState = {
  items: obtenerProductosDelCarrito()
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      console.log(product)

      const existingProduct = state.items.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.cantidad += product.cantidad
      } else {
        state.items.push({ ...product, cantidad: product.cantidad })
      }

      sessionStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.id !== productId)

      sessionStorage.setItem('cart', JSON.stringify(state.items))
    },
    addCantProduct: (state, action) => {
      const product = action.payload
      const productFiltered = state.items.find(item => item.id === product.id)
      if (productFiltered) {
        productFiltered.cantidad += 1
      } else {
        state.items.push({ ...product, cantidad: product.cantidad + 1 })
      }
    },
    removeCantProduct: (state, action) => {
      const product = action.payload
      const productFiltered = state.items.find(item => item.id === product.id)
      productFiltered.cantidad -= 1
    },
    clearCart: state => {
      state.items = []

      sessionStorage.removeItem('cart')
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  addCantProduct,
  removeCantProduct,
  clearCart
} = cartSlice.actions

export const obtenerCantidadProductos = state => state.cart.items.length

export default cartSlice.reducer
