import { createAsyncThunk, current } from '@reduxjs/toolkit';
import { getUserInfo } from '../service/opencagedataApi';
import { exchangeCurrency } from '../service/exchangeAPI';

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

export const fetchExangeCurrency = createAsyncThunk(
  'currency fetchExangeCurrency',
  async (currency, thunkAPI) => {
    try {
      const date = await exchangeCurrency(currency);
      return date;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
