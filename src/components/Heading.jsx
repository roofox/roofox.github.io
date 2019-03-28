import React from "react"
import { StaticQuery, Link as GatsbyLink, graphql } from "gatsby"
import styled from 'styled-components';

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
`;

const Link = styled(GatsbyLink)`
  background-image: none !important;
  font-size: 4rem;
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
