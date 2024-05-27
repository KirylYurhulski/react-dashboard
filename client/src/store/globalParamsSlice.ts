import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Warehouse } from './warehouses/slice';

export const slice = createSlice({
  name: 'globalParams',
  initialState: {
    warehouse: {
      id: '',
      title: ''
    } as Warehouse
  },
  reducers: {
    setWarehouseNumber(state, action: PayloadAction<Warehouse>) {
      state.warehouse = action.payload
    }    
  }
})

export const { setWarehouseNumber } = slice.actions
export default slice.reducer