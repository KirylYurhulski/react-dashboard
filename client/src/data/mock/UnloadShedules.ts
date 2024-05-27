import { UnloadShedule } from '../../store/unloadShedule/slice'

export const unloads: UnloadShedule = {
  title: 'Разгрузка (т/ч) за 20.05.2024',
  dataset: [
    {
      hour: '00',
      value: {
        weight: 10,
      }
    },
    {
      hour: '01',
      value: {
        weight: 37,
      }
    },
    {
      hour: '02',
      value: {
        weight: 53,
      }
    },
    {
      hour: '03',
      value: {
        weight: 0
      }
    },
    {
      hour: '04',
      value: {
        weight: 66,
      }
    },
    {
      hour: '05',
      value: {
        weight: 0
      }
    },
    {
      hour: '06',
      value: {
        weight: 0       
      }
    },
    {
      hour: '07',
      value: {
        weight: 113,
      }
    },
    {
      hour: '08',
      value: {
        weight: 0,
      }
    },
    {
      hour: '09',
      value: {
        weight: 21  
      }
    },
    {
      hour: '10',
      value: {
        weight: 27  
      }
    },
    {
      hour: '11',
      value: {
        weight: 0,
      }
    },
    {
      hour: '12',
      value: {
        weight: 0
      }
    },
    {
      hour: '13',
      value: {
        weight: 0
      }
    },
    {
      hour: '14',
      value: {
        weight: 21,  
      }
    },
    {
      hour: '15',
      value: {
        weight: 42,
      }
    },
    {
      hour: '16',
      value: {
        weight: 0,
      }
    },
    {
      hour: '17',
      value: {
        weight: 0,
      }
    },
    {
      hour: '18',
      value: {
        weight: 21,
      }
    },
    {
      hour: '19',
      value: {
        weight: 63, 
      }
    },
    {
      hour: '20',
      value: {
        weight: 0, 
      }
    },
    {
      hour: '21',
      value: {
        weight: 0,
      }
    },
    {
      hour: '22',
      value: {
        weight: 0,
      }
    },
    {
      hour: '23',
      value: {
        weight: 0,
      }
    }                            
  ],
  measures: [
    {
      accessor: 'value.weight',
      label: 'Вес продукции по разгруженным ТС'
    },
  ]
}
    