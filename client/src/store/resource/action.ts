import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Resource } from './slice';

export const fetchResources = createAsyncThunk<Resource, {warehouseId: string, dats: string}, {}>(
  'resources/fetchResources',
  async(params: {warehouseId: string, dats: string}) => {
    const url = `http://localhost:5000/api/resource?warehouseId=${params.warehouseId}&dats=${params.dats}`
    const responce = await axios.get<Resource>(url)
    return responce.data
  }
)