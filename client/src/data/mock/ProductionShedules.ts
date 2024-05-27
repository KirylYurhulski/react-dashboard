import { ProductionShedule } from '../../store/productionShedule/slice'

export const productions: ProductionShedule = {
  title: 'Производство (т/ч) за 20.05.2024',
  dataset: [
    {
      hour: '00',
      value: {
        lineA: 10,
        lineB: 6,
        lineC: 0,
        lineF: 0
      }
    },
    {
      hour: '01',
      value: {
        lineA: 37,
        lineB: 26,
        lineC: 22,
        lineF: 0
      }
    },
    {
      hour: '02',
      value: {
        lineA: 53,
        lineB: 53,
        lineC: 29,
        lineF: 0
      }
    },
    {
      hour: '03',
      value: {
        lineA: 67,
        lineB: 60,
        lineC: 42,
        lineF: 0
      }
    },
    {
      hour: '04',
      value: {
        lineA: 85,
        lineB: 83,
        lineC: 66,
        lineF: 0
      }
    },
    {
      hour: '05',
      value: {
        lineA: 100,
        lineB: 98,
        lineC: 82,
        lineF: 0
      }
    },
    {
      hour: '06',
      value: {
        lineA: 100,
        lineB: 98,
        lineC: 82,
        lineF: 0       
      }
    },
    {
      hour: '07',
      value: {
        lineA: 113,
        lineB: 109,
        lineC: 91,
        lineF: 0  
      }
    },
    {
      hour: '08',
      value: {
        lineA: 144,
        lineB: 125,
        lineC: 107,
        lineF: 3  
      }
    },
    {
      hour: '09',
      value: {
        lineA: 160,
        lineB: 125,
        lineC: 107,
        lineF: 21  
      }
    },
    {
      hour: '10',
      value: {
        lineA: 193,
        lineB: 125,
        lineC: 118,
        lineF: 27  
      }
    },
    {
      hour: '11',
      value: {
        lineA: 200,
        lineB: 136,
        lineC: 125,
        lineF: 32  
      }
    },
    {
      hour: '12',
      value: {
        lineA: 209,
        lineB: 163,
        lineC: 125,
        lineF: 57  
      }
    },
    {
      hour: '13',
      value: {
        lineA: 236,
        lineB: 190,
        lineC: 125,
        lineF: 78  
      }
    },
    {
      hour: '14',
      value: {
        lineA: 264,
        lineB: 211,
        lineC: 125,
        lineF: 102  
      }
    },
    {
      hour: '15',
      value: {
        lineA: 297,
        lineB: 211,
        lineC: 125,
        lineF: 123  
      }
    },
    {
      hour: '16',
      value: {
        lineA: 299,
        lineB: 211,
        lineC: 139,
        lineF: 125  
      }
    },
    {
      hour: '17',
      value: {
        lineA: 299,
        lineB: 211,
        lineC: 141,
        lineF: 125  
      }
    },
    {
      hour: '18',
      value: {
        lineA: 299,
        lineB: 211,
        lineC: 141,
        lineF: 125  
      }
    },
    {
      hour: '19',
      value: {
        lineA: 302,
        lineB: 215,
        lineC: 147,
        lineF: 125  
      }
    },
    {
      hour: '20',
      value: {
        lineA: 331,
        lineB: 215,
        lineC: 160,
        lineF: 125  
      }
    },
    {
      hour: '21',
      value: {
        lineA: 344,
        lineB: 215,
        lineC: 176,
        lineF: 125  
      }
    },
    {
      hour: '22',
      value: {
        lineA: 344,
        lineB: 215,
        lineC: 176,
        lineF: 125  
      }
    },
    {
      hour: '23',
      value: {
        lineA: 344,
        lineB: 215,
        lineC: 176,
        lineF: 125  
      }
    }                            
  ],
  measures: [
    {
      accessor: 'value.lineA',
      label: 'Линия 1',
    },
    {
      accessor: 'value.lineB',
      label: 'Линия 2'
    },
    {
      accessor: 'value.lineC',
      label: 'Линия 3'
    },
    {
      accessor: 'value.lineF',
      label: 'Линия 4'
    },
  ]
}
    