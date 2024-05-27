import { LoadDuration } from '../../store/loadDuratuin/slice';

export const loads: LoadDuration = {
  title: 'Время загрузки ТС(шт) за 20.05.2024',
  dataset: [
    {
      name: 'БОЛЕЕ 60-МИН.',
      value: 0
    },
    {
      name: '31-60 МИН.',
      value: 0
    },  
    {
      name: '16-30 МИН.',
      value: 5
    },
    {
      name: 'МЕНЕЕ 15 МИН.',
      value: 30
    }
  ],
  measures: [
    {
      accessor: 'value',
      stackId: 'A',
      label: 'Количество транспортных средств',
    }, 
  ]
}