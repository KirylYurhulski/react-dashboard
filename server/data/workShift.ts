import { WorkShift } from '../models/workShift';
import { Numbers } from '../services/Numbers';

export const workShifts: WorkShift[] = [
  {
    warehouseId: '1101',
    dataset: [
      {
        id: 1,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 2,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 3,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 4,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
    ]
  },
  {
    warehouseId: '1102',
    dataset: [
      {
        id: 1,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 2,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 3,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 4,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
    ]
  },
  {
    warehouseId: '1103',
    dataset: [
      {
        id: 1,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 2,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 3,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
      {
        id: 4,
        put: Numbers.random(1, 500),
        out: Numbers.random(1, 500),
        inn: Numbers.random(1, 500),
      },
    ]
  }
]