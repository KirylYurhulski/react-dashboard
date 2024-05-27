import { Resource } from '../models/resource';
import { Dats } from '../services/Dats';

export const resource: Resource[] = [
  {
    warehouseId: '1101',
    dats: [
      {
        dats: Dats.convertToInternal(),
        dataset: [
          {
            name: 'User 1',
            value: {
              put: 100,
              inn: 0,
              out: 50
            }
          },
          {
            name: 'User 2',
            value: {
              put: 90,
              inn: 34,
              out: 28
            }
          },  
          {
            name: 'User 3',
            value: {
              put: 0,
              inn: 134,
              out: 23
            }
          },
          {
            name: 'User 4',
            value: {
              put: 0,
              inn: 500,
              out: 0
            }
          }            
        ]
      }
    ]
  },
  {
    warehouseId: '1102',
    dats: [
      {
        dats: Dats.convertToInternal(),
        dataset: [
          {
            name: 'User 5',
            value: {
              put: 100,
              inn: 0,
              out: 50
            }
          },
          {
            name: 'User 6',
            value: {
              put: 90,
              inn: 34,
              out: 28
            }
          },  
          {
            name: 'User 7',
            value: {
              put: 0,
              inn: 134,
              out: 23
            }
          }          
        ]
      }
    ]
  },
  {
    warehouseId: '1103',
    dats: [
      {
        dats: Dats.convertToInternal(),
        dataset: [
          {
            name: 'User 8',
            value: {
              put: 100,
              inn: 0,
              out: 50
            }
          },
          {
            name: 'User 9',
            value: {
              put: 90,
              inn: 34,
              out: 28
            }
          },          
        ]
      }
    ]
  }
]