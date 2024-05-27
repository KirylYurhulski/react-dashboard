import { LoadKPI } from '../../store/loadKPI/slice';

export const loads: LoadKPI = {
  title: 'Количество ТС и время погрузки за 20.05.2024',
  dataset: [
    {
      success: 36,
      warning: 5,
      error: 4
    }
  ],
  measures: [
    {
      accessor: 'success',
      label: 'В пределах нормы',
      color: 'green',
    },
    {
      accessor: 'warning',
      label: 'Допустимое отклонение',
      color: 'orange',
    },
    {
      accessor: 'error',
      label: 'Отгрузка с задержкой',
      color: 'darkRed',
    } 
  ]
}