import {createAsyncThunk} from '@reduxjs/toolkit'
import { Warehouse } from './slice';
import axios from 'axios';

export const fetchWarehouse = createAsyncThunk<Warehouse[], {}, {}>(
  'warehouse/fetchWarehouse',
  async () => {
    const response = await axios.get<Warehouse[]>('http://localhost:5000/api/warehouse')
    return response.data
  }
)