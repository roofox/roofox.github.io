import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Heading from '../../components/Heading'
import Footer from "../../components/Footer"
import theme from "../../styles/theme"
import GlobalStyle from "../../components/GlobalStyle"
import media from '../../utils/media-query'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2px ${(p) => p.theme.gutters.sidePadding};
  margin-top: 0;

  overflow: hidden;

  ${media.lessThan("sm")`
    padding: 0 ${(p) => p.theme.gutters.smallSidePadding};
  `}
`

const Sergio = styled.a`
  color: ${(p) => p.theme.colors.primary};
  transition: color 400ms;

  &:hover {
    color: ${(p) => p.theme.colors.secondary};
  }
`

// TODO: Get this value from localStorage
theme.mode = "light";
theme.mode = "dark";

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Heading />
      <Main>
        {children}
        <Footer>
          <p>
            Blog escrito por&nbsp;
            <Sergio
              href="https://byoigr.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sergio Flores
            </Sergio>
          </p>
        </Footer>
      </Main>
    </>
  </ThemeProvider>
)

export default MainLayout
