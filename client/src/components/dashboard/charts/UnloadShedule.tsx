import { useEffect } from 'react'
import { LineChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/unloadShedule/slice'

export const UnloadShedule = () => {
  const { dataset, measures } = useAppSelector( state => state.unloadShedule.data )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch])

  return(
    <LineChart
      dataset={ dataset }
      dimensions={[
        {
          accessor: 'hour',
          interval: 0
        }
      ]}
      noLegend
      measures={ measures }
      style={{ fontWeight: 'bold' }}
    />
  )
}