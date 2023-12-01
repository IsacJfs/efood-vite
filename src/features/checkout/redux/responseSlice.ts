import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ResponseState = {
  orderId: string
}

const initialState: ResponseState = {
  orderId: ''
}

const responseSlice = createSlice({
  name: 'response',
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload // set the orderId
    },
    clearResponseData: (state) => {
      state.orderId = '' // clear the orderId
    }
  }
})

export const { setResponseData, clearResponseData } = responseSlice.actions
export default responseSlice.reducer
