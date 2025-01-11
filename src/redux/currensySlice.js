import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {},
});

export const currencyReducer = slice.reducer;
