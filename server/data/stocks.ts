import { Stock } from '../models/stock'
import { Dats } from '../services/Dats'

export const stock: Stock[] = [
  {
    warehouseId: '1101',
    maxСapacity: 6000,
    prcntWarning: 70,
    prcntError: 80,
    stock: [
      {
        dats: '20240524',
        value: 4681.454,
      },
      {
        dats: '20240523',
        value: 3000,
      },
      {
        dats: Dats.convertToExternal(),
        value: 3000,
      },            
    ]
  },
  {
    warehouseId: '1102',
    maxСapacity: 5000,
    prcntWarning: 70,
    prcntError: 80,
    stock: [
      {
        dats: '20240524',
        value: 2000,
      },
      {
        dats: '20240523',
        value: 3000,
      },
      {
        dats: Dats.convertToExternal(),
        value: 3000,
      }, 
    ]
  },
  {
    warehouseId: '1103',
    maxСapacity: 4000,
    prcntWarning: 70,
    prcntError: 80,
    stock: [
      {
        dats: '20240524',
        value: 1000,
      },
      {
        dats: '20240523',
        value: 1500,
      },
      {
        dats: Dats.convertToExternal(),
        value: 1500,
      }, 
    ]
  }
]