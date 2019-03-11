import React from "react"
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Heading from '../../components/Heading'
import GlobalStyle from "../../components/GlobalStyle"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Row center="lg">
        <Col xs={12} sm={12} md={6} lg={7}>
          <Heading />
          {children}
        </Col>
      </Row>
    </Grid>
  </>
)

export default MainLayout
