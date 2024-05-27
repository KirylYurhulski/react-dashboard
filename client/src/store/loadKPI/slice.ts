import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loads as loadKPIsMockData }  from '../../data/mock/LoadKPI';

export type LoadKPI = {
  title: string,
  dataset: {
    success: number,
    warning: number,
    error: number
  }[],
  measures: {
    accessor: string,
    label: string,
    color: string,
  }[]
}

const slice = createSlice({
  name: 'loadKPI',
  initialState: {
    data: {
      title: 'Количество ТС и время погрузки',
      dataset: [],
      measures: []
    } as LoadKPI
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = loadKPIsMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer