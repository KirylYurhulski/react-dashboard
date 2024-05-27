import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loads as LoadDurationsMockData } from '../../data/mock/LoadDurations';

export type LoadDuration = {
  title: string,
  dataset: {
    name: string,
    value: number
  }[],
  measures: {
    accessor: string,
    stackId: string,
    label: string,
  }[]
}

const slice = createSlice({
  name: 'loadDuration',
  initialState: {
    data: {
      title: 'Количество загруженных ТС по времени(шт)',
      dataset: [],
      measures: []      
    } as LoadDuration
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = LoadDurationsMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer