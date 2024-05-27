import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { unloads as unloadShedulesMockData } from '../../data/mock/UnloadShedules';

export type UnloadShedule = {
  title: string,
  dataset: {
    hour: string
    value: {
      [key: string]: number
    }
  }[],
  measures: {
    accessor: string,
    label: string
  }[]
}

const slice = createSlice({
  name: 'unloadShedule',
  initialState: {
    data: {
      title: 'Разгрузка (т/ч)',
      dataset: [],
      measures: []
    } as UnloadShedule
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = unloadShedulesMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer