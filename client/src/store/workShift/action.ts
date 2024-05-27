import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Shifts } from './slice';

export const fetchWorkShits = createAsyncThunk<Shifts, {warehouseId: string}, {}>(
  'workShifts/fetchWorkShifts',
  async(params: {warehouseId: string}) => {
    const responce = await axios.get<Shifts>(`http://localhost:5000/api/workshift/${params.warehouseId}`)
    return responce.data
  }
)