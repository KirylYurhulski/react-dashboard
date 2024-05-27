import { useEffect } from 'react'
import { Table, TableColumn, Label, Loader, MessageView, MessageItem } from '@ui5/webcomponents-react'
import { Item } from './Item'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { fetchWorkShits } from '../../../../store/workShift/action'

export const List = () => {
  const warehouseId = useAppSelector( state => state.persisted.globalParams.warehouse.id )
  const workShift = useAppSelector( state => state.workShift.data.dataset )
  const loading = useAppSelector( state => state.workShift.loading )
  const errorMessage = useAppSelector( state => state.workShift.errorMessage )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWorkShits({warehouseId}))
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
          
      { !loading && !errorMessage && <Table
          columns={
            <>
              <TableColumn>
                <Label>Смена</Label>
              </TableColumn>
              <TableColumn>
                <Label>Приемка</Label>
              </TableColumn>
              <TableColumn>
                <Label>Отгрузка</Label>
              </TableColumn>
              <TableColumn>
                <Label>Внутренние</Label>
              </TableColumn>
              <TableColumn>
                <Label>Всего</Label>
              </TableColumn>
            </>
          }
        >
          { workShift.map( el => <Item key={el.id} shift={el}/>  ) }
        </Table> }
    </>
  )
}