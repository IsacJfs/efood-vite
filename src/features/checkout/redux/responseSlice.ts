import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type responseState = {
  orderId: string;
};

const initialState: responseState = {
  orderId: ''
};

const responseSlice = createSlice({
  name: 'response',
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
  },
});

export const { setResponseData } = responseSlice.actions;
export default responseSlice.reducer;
