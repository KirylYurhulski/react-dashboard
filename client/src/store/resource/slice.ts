import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  }[]
}

const slice = createSlice({
  name: 'resource',
  initialState: {
    data: {
      title: 'Работа смены',
      dataset: [],
      measures: []
    } as Resource,
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = recourcesMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer