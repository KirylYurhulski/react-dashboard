import { FC } from 'react';
import { TableRow, TableCell, Label } from '@ui5/webcomponents-react';
import { Shift } from '../../../../store/workShift/slice';

interface Props {
  shift: Shift
}

export const Item: FC<Props> = ({ shift }) => {
  return (
    <TableRow>
      <TableCell>
        <Label>
          { shift.description }
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          { shift.put }
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          { shift.out }
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          { shift.inn }
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          { shift.all }
        </Label>
      </TableCell>
    </TableRow>    
  )
}