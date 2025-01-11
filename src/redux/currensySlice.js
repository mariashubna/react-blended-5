import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExangeCurrency } from './operations';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
      });
  },
});

export const { setBaseCurrency } = slice.actions;

export const currencyReducer = slice.reducer;
