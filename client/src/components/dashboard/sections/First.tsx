import { SplitterLayout, SplitterElement, FlexBox} from '@ui5/webcomponents-react';
import { Stock } from '../charts/Stock';
import { Resources } from '../charts/Resources';
import { List as WorkShifts } from '../charts/workShift/List';
import { CardWithTitle } from '../charts/CardWithTitle';
import { useAppSelector } from '../../../store';

export const First = () => {
  const stockChartTitle = useAppSelector( state => state.stock.data.title )
  const resourceChartTitle = useAppSelector( state => state.resource.data.title )
  const workShiftChartTitle = useAppSelector( state => state.workShift.data.title )

  return (
    <SplitterLayout
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <SplitterElement>
        <FlexBox
          alignItems="Center"
          justifyContent="Center"
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <CardWithTitle title={ stockChartTitle }>
            <Stock/>
          </CardWithTitle>
        </FlexBox>
      </SplitterElement>
      <SplitterElement>
        <FlexBox
          alignItems="Center"
          justifyContent="Center"
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <CardWithTitle title={ resourceChartTitle }>
            <Resources/>
        </CardWithTitle>
        </FlexBox>
      </SplitterElement>
      <SplitterElement>
        <FlexBox
          alignItems="Center"
          justifyContent="Center"
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <CardWithTitle title={ workShiftChartTitle }>
            <WorkShifts/>
          </CardWithTitle>
        </FlexBox>
        </SplitterElement>
    </SplitterLayout>
  )
}