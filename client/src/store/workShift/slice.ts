import { createSlice } from '@reduxjs/toolkit'
import { fetchWorkShits } from './action'

export interface Shift {
  id: number,
  description: string,
  put: number,
  out: number,
  inn: number,
  all: number  
}

export interface Shifts {
  title: string,
  dataset: Shift[]
}

const slice = createSlice({
  name: 'workShift',
  initialState: {
    data: {
      title: 'Производительность: (Операции - ШТ)',
      dataset: []
    } as Shifts,
    loading: false,
    errorMessage: ''
  },
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchWorkShits.pending, (state) => {
      state.loading = true
      state.errorMessage = ''
    })
    .addCase(fetchWorkShits.fulfilled, (state, action) => {
      state.loading = false
      state.errorMessage = ''
      state.data = {
        ...action.payload
      }
    })
    .addCase(fetchWorkShits.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = `[${ action.error.code }] ${ action.error.message }`
    })
  },
})

export default slice.reducer