import { Shifts } from '../../store/workShift/slice';

export const shifts: Shifts = {
  title: 'Производительность: (Операции - ШТ)',
  dataset: [
    {
      id: 1,
      description: 'Смена 1',
      put: 1853,
      out: 807,
      inn: 878,
      all: 3528
    },
    {
      id: 2,
      description: 'Смена 2',
      put: 1818,
      out: 1966,
      inn: 298,
      all: 4082
    },
    {
      id: 3,
      description: 'Смена 3',
      put: 1746,
      out: 1905,
      inn: 321,
      all: 3972
    },
    {
      id: 4,
      description: 'Смена 4',
      put: 1311,
      out: 2629,
      inn: 313,
      all: 4253
    },
  ]
}