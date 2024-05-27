import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FC, ReactNode } from 'react';
import { Bar } from '@ui5/webcomponents-react';

interface Props {
  title: string
  children: ReactNode
}

export const CardWithTitle: FC<Props> = ({children, title}) => {
  return(
    <Container fluid="md">
      <Row>
        <Col>
          <Bar
            design="Header" >
            <span style={{ fontWeight: 'bold' }}>
              { title }
            </span>
          </Bar>
        </Col>
      </Row>
      <Row>
        <Col>
          { children }
        </Col>
      </Row>
    </Container>
  )
}