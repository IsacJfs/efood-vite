import {configureStore} from '@reduxjs/toolkit'
import restauranteApi from '../services/api'
import cartReducer from '../features/checkout/redux/cartSlice'
import deliveryReducer from '../features/checkout/redux/deliverySlice'
import paymentReduce from '../features/checkout/redux/paymentSlice'
import responseReduce from '../features/checkout/redux/responseSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    payment: paymentReduce,
    response: responseReduce,
    [restauranteApi.reducerPath]: restauranteApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(restauranteApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
