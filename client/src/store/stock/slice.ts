import { createSlice } from '@reduxjs/toolkit'
import { fetchStock } from './action'

export interface Stock {
  title: string,
  maxCapacity: number,
  value: number,
  prcntWarning: number,
  prcntError: number,
  displayValue: string
}

const slice = createSlice({
  name: 'stock',
  initialState: {
    data: {
      title: 'Общий тоннаж(т)',
      maxCapacity: 0,
      value: 0,
      prcntWarning: 0,
      prcntError: 0,
      displayValue: `Занято 0 из 0 (т)`
    } as Stock,
    color: '',
    loading: false,
    errorMessage: '', 
  },
  reducers: {},
  extraReducers(builder) {
      builder
        .addCase(fetchStock.pending, (state) => {
          state.loading = true
          state.errorMessage = ''
        })
        .addCase(fetchStock.fulfilled, (state, action) => {
          state.loading = false
          state.errorMessage = ''
          Object.assign(state.data, action.payload)
          state.color = setColor( state.data )
        })
        .addCase(fetchStock.rejected, (state, action) => {
          state.loading = false
          state.errorMessage = `[${ action.error.code }] ${ action.error.message }`
        })
  },
})

const setColor = (stock: Stock): string => {
  const prcnt: number = stock.value * 100 / stock.maxCapacity
    
  if ( prcnt > stock.prcntWarning && prcnt < stock.prcntError ){
    return "#f0ab00"
  } else if ( prcnt > stock.prcntError ) {
    return "#b5261c"
  } else {
    return "#3ea32e"
  }    
}

export default slice.reducer