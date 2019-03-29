import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Heading from '../../components/Heading'
import SiteMetadata from "../../components/SiteMetadata"
import Footer from "../../components/Footer"
import theme from "../../theme"
import GlobalStyle from "../../components/GlobalStyle"

const Main = styled.main`
  padding: 0 ${p => p.theme.sidePadding};
  overflow: hidden;
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SiteMetadata />
      <GlobalStyle />
      <Heading />
      <Main>
        {children}
        <Footer>
          <p>Blog escrito por Sergio Flores</p>
        </Footer>
      </Main>
    </>
  </ThemeProvider>
)

export default MainLayout
