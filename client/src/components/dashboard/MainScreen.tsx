import { SplitterLayout, SplitterElement, FlexBox } from '@ui5/webcomponents-react';
import { First } from './sections/First';
import { Second } from './sections/Second';
import { Third } from './sections/Third';

export const MainScreen = () => {
  return(
    <SplitterLayout
      vertical
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
          <First/>
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
          <Second/>
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
          <Third/>
        </FlexBox>
      </SplitterElement>
        </SplitterLayout>
  )
}