import { useEffect } from 'react'
import { ColumnChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/loadShedule/slice'

export const LoadShedule = () => {
  const { dataset, measures } = useAppSelector( state => state.loadShedule.data )
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
      measures={
        measures.map<{ accessor: string, label: string, color: string, stackId: string }>(
          el => ({ ...el, stackId: 'A' })
        )
      }
    />
  )
}