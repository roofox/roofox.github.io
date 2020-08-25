import React from "react"
import { StaticQuery, Link as GatsbyLink, graphql } from "gatsby"
import styled from 'styled-components';
import { darken } from 'polished';

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  max-width: 76rem;
  flex: 1;
`

const Title = styled.h1`
  text-align: center;
  font-family: ${(p) => p.theme.headerFontFamily};
  font-size: 3rem;
`

const Link = styled(GatsbyLink)`
  background-image: none !important;
  text-decoration: none;
  color: ${(p) => p.theme.primaryColor1};

  transition: color 200ms;

  &:hover {
    color: ${(p) => darken(0.1, p.theme.primaryColor1)};
  }
`

const MainLayout = ({
  site: {
    siteMetadata: { title },
  },
}) => (
  <Header>
    <HeaderContainer>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
    </HeaderContainer>
  </Header>
)

const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={MainLayout}
  />
)
