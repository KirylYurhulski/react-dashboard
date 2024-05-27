import { useEffect } from 'react'
import { BarChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setData } from '../../../store/resource/slice'

export const Resources = () => {
  const resources = useAppSelector( state => state.resource.data )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch])

  return (
    <BarChart
      dataset={ resources.dataset }
      dimensions={[
        {
          accessor: 'name',
        }
      ]}
      measures={ resources.measures }
      style={{ fontWeight: 'bold' }}
    />
  )
}