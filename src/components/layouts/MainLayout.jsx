import React from "react"
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Heading from '../../components/Heading'
import GlobalStyle from "../../components/GlobalStyle"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Row>
        <Col style={{ backgroundColor: "red" }}>
          <Heading />
          {children}
        </Col>
      </Row>
    </Grid>
  </>
)

export default MainLayout
