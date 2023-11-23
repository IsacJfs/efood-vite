import {configureStore} from '@reduxjs/toolkit'
import restauranteApi from '../services/api'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [restauranteApi.reducerPath]: restauranteApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(restauranteApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
