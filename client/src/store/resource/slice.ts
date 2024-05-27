import { createSlice } from '@reduxjs/toolkit';
import { fetchResources } from './action'
import { resources as recourcesMockData } from '../../data/mock/Resources';

export type Resource = {
  title: string,
  dataset: {
    name: string,
    value: {
      put: number,
      inn: number,
      out: number
    }
  }[],
  measures: {
    accessor: string,
    stackId: string,
    label: string,
  }[],
}

const slice = createSlice({
  name: 'resource',
  initialState: {
    data: {
      title: 'Работа смены',
      dataset: [],
      measures: []
    } as Resource,
    loading: false,
    errorMessage: ''
  },
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchResources.pending, (state) => {
      state.loading = true
      state.errorMessage = ''
    })
    .addCase(fetchResources.fulfilled, (state, action) => {
      state.loading = false
      state.errorMessage = ''
      state.data = {
        ...action.payload,
        measures: recourcesMockData.measures
      }
    })
    .addCase(fetchResources.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = `[${ action.error.code }] ${ action.error.message }`
    })
  },
})

export default slice.reducer