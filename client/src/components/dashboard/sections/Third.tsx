import { SplitterLayout, SplitterElement, FlexBox} from '@ui5/webcomponents-react';
import { LoadShedule } from '../charts/LoadShedule';
import { LoadDuration } from '../charts/LoadDuration';
import { LoadKPI } from '../charts/LoadKPI';
import { CardWithTitle } from '../charts/CardWithTitle';
import { useAppSelector } from '../../../store';

export const Third = () => {
  const loadingChartTitle = useAppSelector( state => state.loadShedule.data.title )
  const loadingTimeChartTitle = useAppSelector( state => state.loadDuratuin.data.title )
  const loadingKPIChartTitle = useAppSelector( state => state.loadKPI.data.title )

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
          <CardWithTitle title={ loadingChartTitle }>
            <LoadShedule/>
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
          <CardWithTitle title={ loadingTimeChartTitle }>
            <LoadDuration/>
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
          <CardWithTitle title={ loadingKPIChartTitle }>
            <LoadKPI/>
          </CardWithTitle>
        </FlexBox>
      </SplitterElement>
    </SplitterLayout>
  )
}