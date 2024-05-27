import { useEffect } from 'react'
import { BarChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/loadDuratuin/slice'

export const LoadDuration = () => {
  const { dataset, measures } = useAppSelector( state => state.loadDuratuin.data )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch])

  return(
    <BarChart
      dataset={ dataset }
      dimensions={[
        {
          accessor: 'name',
        }
      ]}
      noLegend
      measures={ measures }
      style={{ fontWeight: 'bold' }}
    />
  )
}