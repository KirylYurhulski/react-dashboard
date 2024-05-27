import { useEffect } from 'react'
import { RadialChart } from '@ui5/webcomponents-react-charts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { fetchStock } from '../../../store/stock/action'
import { Dats as DatsUtils } from '../../../services/Dats'
import { Loader, MessageItem, MessageView } from '@ui5/webcomponents-react'

export const Stock = () => {
  const data = useAppSelector(state => state.stock.data)
  const color = useAppSelector( state => state.stock.color )
  const loading = useAppSelector( state => state.stock.loading )
  const errorMessage = useAppSelector( state => state.stock.errorMessage )
  const warehouseId = useAppSelector( state => state.persisted.globalParams.warehouse.id )
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchStock({id: warehouseId, dats: DatsUtils.convertToExternal() }))
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
          
      { !loading && !errorMessage && <RadialChart
        color={ color }
        displayValue={ data.displayValue }
        value={ data.value }
        maxValue={ data.maxCapacity }
        displayValueStyle={ { fontSize: 15, fontWeight: 'bold' } }
      /> }
    </>
  )
}