import { FC, useEffect, useState } from 'react'
import { Popup } from './Popup'
import { Select, Option, SelectDomRef, Ui5CustomEvent, ButtonDomRef, Loader, Label } from '@ui5/webcomponents-react'
import { SelectChangeEventDetail } from '@ui5/webcomponents/dist/Select'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setWarehouseNumber } from '../../../store/globalParamsSlice'
import { Warehouse } from '../../../store/warehouses/slice' 
import { fetchWarehouse } from '../../../store/warehouses/action'

interface Props {
  open: boolean,
  onClose: React.MouseEventHandler<ButtonDomRef>
}

export const PopupSelectLgnum:FC<Props> = ({ open, onClose }) => {
  const warehouses = useAppSelector( state => state.warehouses.warehouses )
  const loading = useAppSelector( state => state.warehouses.loading )
  const errorMessage = useAppSelector( state => state.warehouses.errorMessage )

  const [selWarehouse, setSelWarehouse] = useState<Warehouse>({id: '', title: ''})
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWarehouse({}))
  }, [dispatch])

  return(
    <Popup
      title="Выбор номера склада..."
      open={ open }
      onSave={
        () => {
          dispatch(setWarehouseNumber(selWarehouse))
        }
      }
      onClose={ onClose }>

      { loading && !errorMessage && <Loader progress="100%" /> }

      { !loading && errorMessage && <Label>{ errorMessage }</Label> }

      { !loading && !errorMessage && <Select
        onChange={(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => {
          if (typeof event.detail.selectedOption.dataset.id === 'string') {
            const warehouseId = event.detail.selectedOption.dataset.id
            setSelWarehouse(Object.assign({}, ...warehouses.filter(item => item.id === warehouseId )));
          }
        }}
      >
        { warehouses.map((item) => (
          <Option key={item.id} data-id={item.id}>
            {`${item.id} - ${item.title}`}
          </Option>
        )) }
      </Select> }
    </Popup>
  )
}