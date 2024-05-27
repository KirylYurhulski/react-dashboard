import { Bar, Button, ButtonDomRef, Dialog } from '@ui5/webcomponents-react'
import { FC, ReactNode } from 'react'

interface Props {
  title: string,
  open: boolean,
  children: ReactNode,
  onSave: React.MouseEventHandler<ButtonDomRef>,
  onClose: React.MouseEventHandler<ButtonDomRef>
}

export const Popup: FC<Props> = ({ title, open, children, onSave, onClose }) => {
  return (
    <Dialog
      open={ open }
      footer={
        <Bar design="Footer"
          endContent={
            <>
              <Button onClick={ onSave }>Сохранить</Button>
              <Button onClick={ onClose }>Закрыть</Button>
            </>
          }
        />
      }
      headerText={ title }
    >
      { children }
    </Dialog>    
  )
}