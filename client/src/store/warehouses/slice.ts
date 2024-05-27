import { createSlice } from '@reduxjs/toolkit'
import { fetchWarehouse } from './action'

export interface Warehouse {
  id: string,
  title: string,
}

export const slice = createSlice({
  name: 'warehouses',
  initialState: {
    warehouses: [] as Warehouse[],
    loading: false,
    errorMessage: ''
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWarehouse.pending, (state) => {
        state.loading = true
        state.errorMessage = ''
      })
      .addCase(fetchWarehouse.fulfilled, (state, action) => {
        state.loading = false
        state.errorMessage = ''
        state.warehouses = action.payload
      })
      .addCase(fetchWarehouse.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = `[${ action.error.code }] ${ action.error.message }`
      })
  },
})

export default slice.reducer