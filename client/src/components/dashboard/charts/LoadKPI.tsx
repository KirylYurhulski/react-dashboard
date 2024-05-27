import { useEffect } from 'react'
import { ColumnChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/loadKPI/slice'

export const LoadKPI = () => {
  const { dataset, measures } = useAppSelector( state => state.loadKPI.data )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch])

  return (
    <ColumnChart
      dataset={ dataset }
      dimensions={[
        {
          accessor: 'hour',
        }
      ]}
      measures={ measures.map<{ accessor: string }>(el => ({ ...el, stackId: 'A' })) }
    />
  )
}