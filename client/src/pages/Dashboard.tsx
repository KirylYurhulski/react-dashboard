import { useState } from 'react';
import { Page, Bar, Button, Label } from '@ui5/webcomponents-react';
import { MainScreen } from '../components/dashboard/MainScreen';
import { useAppSelector } from '../store';
import { PopupSelectLgnum } from '../components/controls/modals/PopupSelectLgnum';

export default function Dashboard() {
  const [popupWarehouseSelIsOpen, setPopupWarehouseSelIsOpen] = useState(false);
  const warehouse = useAppSelector( (state) => state.persisted.globalParams.warehouse )

  return (
    <>
      <Page
        backgroundDesign="Solid"
        header={
          <Bar design="Header"
            endContent={
              <Button
                icon="settings"
                title="Основные настройки"
                onClick={ () => setPopupWarehouseSelIsOpen(true) }/>
            }
            startContent={
              <Button icon="refresh" title="Обновить"/>
            }>
            <Label style={{ fontWeight: 'bold', fontSize: 20, color: '#1006c6' }}>
              { `Пульт управления складом: Склад <${warehouse.id} ${warehouse.title}>` }
            </Label>
          </Bar>
        }
        style={{
          height: '1400px'
        }}>
        <MainScreen/>
      </Page>

      <PopupSelectLgnum
        open={ popupWarehouseSelIsOpen }
        onClose={ () => { setPopupWarehouseSelIsOpen(false) } }/>
    </>
  )
}
