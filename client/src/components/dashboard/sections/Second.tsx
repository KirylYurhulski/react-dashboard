import { SplitterLayout, SplitterElement, FlexBox} from '@ui5/webcomponents-react';
import { ProductionShedule } from '../charts/ProductionShedule';
import { UnloadShedule } from '../charts/UnloadShedule';
import { CardWithTitle } from '../charts/CardWithTitle';
import { useAppSelector } from '../../../store';

export const Second = () => {
  const productionChartTitle = useAppSelector( state => state.productionShedule.data.title )
  const unloadingChartTitle = useAppSelector( state => state.unloadShedule.data.title )

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
          <CardWithTitle title={ productionChartTitle }>
            <ProductionShedule/>
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
          }}>
            <CardWithTitle title={ unloadingChartTitle }>
              <UnloadShedule/>
            </CardWithTitle>
        </FlexBox>
      </SplitterElement>
    </SplitterLayout>
  )
}