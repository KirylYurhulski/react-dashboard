import { useEffect } from 'react'
import { BarChart } from '@ui5/webcomponents-react-charts'
import { Loader, MessageItem, MessageView } from '@ui5/webcomponents-react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { fetchResources } from '../../../store/resource/action'
import { Dats as DatsUtils } from '../../../services/Dats'

export const Resources = () => {
  const warehouseId = useAppSelector( state => state.persisted.globalParams.warehouse.id )
  const resources = useAppSelector( state => state.resource.data )
  const loading = useAppSelector( state => state.resource.loading )
  const errorMessage = useAppSelector( state => state.resource.errorMessage )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchResources({warehouseId: warehouseId, dats: DatsUtils.convertToExternal()}))
  }, [dispatch, warehouseId])

  return (
    <>
      { loading && !errorMessage && <Loader progress="100%" /> }

      { !loading && errorMessage && <MessageView showDetailsPageHeader>
          <MessageItem
            counter={1}
            groupName="Stock"
            subtitleText={ errorMessage }
            titleText="Ошибка при загрузке данных"
            type="Error">
              { errorMessage }
          </MessageItem>          
        </MessageView>     
      }  
          
      { !loading && !errorMessage && <BarChart
        dataset={ resources.dataset }
        dimensions={[
          {
            accessor: 'name',
          }
        ]}
        measures={ resources.measures }
        style={{ fontWeight: 'bold' }}
      /> }
  </>
  )
}