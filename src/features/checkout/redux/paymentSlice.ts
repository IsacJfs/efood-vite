import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeliveryState = {
  name: string
  number: string
  code: number
  month: number
  year: number
}

const initialState: DeliveryState = {
  name: '',
  number: '',
  code: 0,
  month: 0,
  year: 0
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload // set the receiver name
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload // set the description
    },
    setCode: (state, action: PayloadAction<number>) => {
      state.code = action.payload // set the city
    },
    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload // set the zip code
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload // set the number
    }
  }
})

export const { setCode, setMonth, setName, setNumber, setYear } =
  paymentSlice.actions
export default paymentSlice.reducer
