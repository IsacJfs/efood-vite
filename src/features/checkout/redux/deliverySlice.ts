import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeliveryState = {
  receiver: string;
  description: string;
  city: string;
  zipCode: string;
  number: number;
  complement?: string;
};

const initialState: DeliveryState = {
  receiver: '',
  description: '',
  city: '',
  zipCode: '',
  number: 0,
  complement: ''
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setReceiver: (state, action: PayloadAction<string>) => {
      state.receiver = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload;
    },
    setNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
    setComplement: (state, action: PayloadAction<string>) => {
      state.complement = action.payload;
    }
  }
});

export const { setReceiver, setDescription, setCity, setZipCode, setNumber, setComplement } = deliverySlice.actions;
export default deliverySlice.reducer;
