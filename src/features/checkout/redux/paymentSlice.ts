import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeliveryState = {
  name: string;
  number: string;
  code: number;
  month: number;
  year: number;
};

const initialState: DeliveryState = {
  name: '',
  number: '',
  code: 0,
  month: 0,
  year: 0
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    setCode: (state, action: PayloadAction<number>) => {
      state.code = action.payload;
    },
    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    }
  }
});

export const { setCode, setMonth, setName, setNumber, setYear } = paymentSlice.actions;
export default paymentSlice.reducer;
