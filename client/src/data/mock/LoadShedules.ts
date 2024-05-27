import { LoadShedule } from '../../store/loadShedule/slice'

export const loads: LoadShedule = {
  title: 'Отгрузка ТС за 20.05.2024',
  dataset: [
    {
      hour: '00',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '01',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '02',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '03',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '04',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '05',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '06',
      value: {
        cont: 0,
        auto: 0      
      }
    },
    {
      hour: '07',
      value: {
        cont: 2,
        auto: 1
      }
    },
    {
      hour: '08',
      value: {
        cont: 0,
        auto: 2
      }
    },
    {
      hour: '09',
      value: {
        cont: 3,
        auto: 2  
      }
    },
    {
      hour: '10',
      value: {
        cont: 0,
        auto: 2 
      }
    },
    {
      hour: '11',
      value: {
        cont: 1,
        auto: 5 
      }
    },
    {
      hour: '12',
      value: {
        cont: 0,
        auto: 4
      }
    },
    {
      hour: '13',
      value: {
        cont: 2,
        auto: 0
      }
    },
    {
      hour: '14',
      value: {
        cont: 0,
        auto: 3
      }
    },
    {
      hour: '15',
      value: {
        cont: 0,
        auto: 4
      }
    },
    {
      hour: '16',
      value: {
        cont: 7,
        auto: 5 
      }
    },
    {
      hour: '17',
      value: {
        cont: 0,
        auto: 3
      }
    },
    {
      hour: '18',
      value: {
        cont: 2,
        auto: 0 
      }
    },
    {
      hour: '19',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '20',
      value: {
        cont: 0,
        auto: 0 
      }
    },
    {
      hour: '21',
      value: {
        cont: 0,
        auto: 0 
      }
    },
    {
      hour: '22',
      value: {
        cont: 0,
        auto: 0
      }
    },
    {
      hour: '23',
      value: {
        cont: 0,
        auto: 0
      }
    }                            
  ],
  measures: [
    {
      accessor: 'value.cont',
      label: 'Количество ТС вида 1',
      color: 'green'
    },
    {
      accessor: 'value.auto',
      label: 'Количество ТС вида 2',
      color: 'purple'
    }
  ]
}