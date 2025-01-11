import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return baseCurrency;
    }

    try {
      const response = await getUserInfo(coords);
      return response.results[0].annotations.currency.iso_code;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
