import { useEffect } from 'react'
import { Table, TableColumn, Label } from '@ui5/webcomponents-react'
import { Item } from './Item'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { setData } from '../../../../store/workShift/slice'

export const List = () => {
  const workShift = useAppSelector( state => state.workShift.data.dataset )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData())
  }, [dispatch]) 

  return (
      <Table
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
      </Table> 
  )
}