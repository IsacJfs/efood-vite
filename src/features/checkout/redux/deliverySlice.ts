import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types (State)
type DeliveryState = {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

// Initial State
const initialState: DeliveryState = {
  receiver: '',
  description: '',
  city: '',
  zipCode: '',
  number: 0,
  complement: ''
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setReceiver: (state, action: PayloadAction<string>) => {
      state.receiver = action.payload // set the receiver name
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload // set the description
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload // set the city
    },
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload // set the zip code
    },
    setNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload // set the number
    },
    setComplement: (state, action: PayloadAction<string>) => {
      state.complement = action.payload // set the complement
    }
  }
})

export const {
  setReceiver,
  setDescription,
  setCity,
  setZipCode,
  setNumber,
  setComplement
} = deliverySlice.actions
export default deliverySlice.reducer
