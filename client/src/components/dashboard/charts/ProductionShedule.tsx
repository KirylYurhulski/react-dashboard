import { useEffect } from 'react'
import { LineChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/productionShedule/slice'

export const ProductionShedule = () => {
  const {dataset, measures} = useAppSelector( state => state.productionShedule.data )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch])

  return (
    <LineChart
      dataset={ dataset }
      dimensions={[
        {
          accessor: 'hour',
          interval: 0,
        },
      ]}
      measures={ measures }
      style={{ fontWeight: 'bold', width: '100', height: '100' }}
      chartConfig={
        {
          
        }
      }
    />
  )
}