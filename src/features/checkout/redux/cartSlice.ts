import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
type CartState = {
  items: Menu[]
  isOpen: boolean
}

// Initial State
const initialState: CartState = {
  items: [],
  isOpen: false
}

// Slice (Reducers)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      // Check if item already exists
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      // If not, add it to the cart
      if (!existingItem) {
        state.items.push(action.payload)
      } else {
        alert('O Prato selecionado já está no carrinho')
      }
    },
    // Remove item from cart
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Open cart
    open: (state) => {
      state.isOpen = true
    },
    // Close cart
    close: (state) => {
      state.isOpen = false
    },
    // Clear cart
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
