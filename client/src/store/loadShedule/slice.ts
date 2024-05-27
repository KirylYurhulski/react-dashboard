import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loads as loadsMockData } from '../../data/mock/LoadShedules';

export type LoadShedule = {
  title: string,
  dataset: {
    hour: string
    value: {
      [key: string]: number
    }
  }[],
  measures: {
    accessor: string,
    label: string,
    color: string,
  }[]
}

const slice = createSlice({
  name: 'LoadShedule',
  initialState: {
    data: {
      title: 'Отгрузка ТС',
      dataset: [],
      measures: []      
    } as LoadShedule
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = loadsMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer

