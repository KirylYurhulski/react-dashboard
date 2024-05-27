import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { shifts as shiftsMockData } from '../../data/mock/WorkShifts'

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
    } as Shifts
  },
  reducers: {
    setData(state, action: PayloadAction) {
      state.data = shiftsMockData
    }
  }
})

export const { setData } = slice.actions 
export default slice.reducer