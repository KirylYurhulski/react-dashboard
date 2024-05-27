import {createAsyncThunk} from '@reduxjs/toolkit'
import { Stock } from './slice';
import axios from 'axios';

export const fetchStock = createAsyncThunk<Stock, {id: string, dats: string}, {}>(
  'stock/fetchStock',
  async (params: {id: string, dats: string}) => {
    const response = await axios.get<Stock>(`http://localhost:5000/api/stock?warehouseId=${ params.id }&dats=${params.dats}`)
    return response.data
  }
)