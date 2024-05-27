import { Resource } from '../../store/resource/slice';

export const resources: Resource = {
  title: 'Работа ресурсов за 20.05.2024',
  dataset: [
    {
      name: 'User 1',
      value: {
        put: 180,
        inn: 0,
        out: 70
      }
    },
    {
      name: 'User 2',
      value: {
        put: 110,
        inn: 34,
        out: 42
      }
    },  
    {
      name: 'User 3',
      value: {
        put: 66,
        inn: 242,
        out: 0
      }
    },
    {
      name: 'User 4',
      value: {
        put: 0,
        inn: 262,
        out: 0
      }
    }
  ],
  measures: [
    {
      accessor: 'value.put',
      stackId: 'A',
      label: 'Входящие',
    },
    {
      accessor: 'value.inn',
      stackId: 'A',
      label: 'Внутренние'
    },
    {
      accessor: 'value.out',
      stackId: 'A',
      label: 'Исходящие'
    }    
  ]
}