import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { productions as productionsMockData } from '../../data/mock/ProductionShedules';

export type ProductionShedule = {
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
  name: 'productionShedule',
  initialState: {
    data: {
      title: 'Фасовка (т/ч)',
      dataset: [],
      measures: []
    } as ProductionShedule
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = productionsMockData
    }
  }
})

export const { setData } = slice.actions
export default slice.reducer