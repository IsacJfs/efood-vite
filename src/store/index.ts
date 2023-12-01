import { configureStore } from '@reduxjs/toolkit'
import restauranteApi from '../services/api'
import cartReducer from '../features/checkout/redux/cartSlice'
import deliveryReducer from '../features/checkout/redux/deliverySlice'
import paymentReduce from '../features/checkout/redux/paymentSlice'
import responseReduce from '../features/checkout/redux/responseSlice'

// The store is configured with the reducers from the different features
export const store = configureStore({
  reducer: {
    cart: cartReducer, // the cart reducer is used to store the items added to the cart
    delivery: deliveryReducer, // the delivery reducer is used to store the delivery data
    payment: paymentReduce, // the payment reducer is used to store the payment data
    response: responseReduce, // the response reducer is used to store the response data
    [restauranteApi.reducerPath]: restauranteApi.reducer // the reducerPath is used to store the data from the API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restauranteApi.middleware) // the middleware is used to handle the API requests
})

export type RootReducer = ReturnType<typeof store.getState>
