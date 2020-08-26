import React from "react"
import { StaticQuery, Link as GatsbyLink, graphql } from "gatsby"
import styled from 'styled-components';
import { darken } from 'polished';
import media from '../utils/media-query'

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  flex: 1;
  max-width: ${p => p.theme.breakpoints.lg};
`

const Title = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-family: ${(p) => p.theme.fonts.families.header};
  font-size: 4rem;

  ${media.lessThan("xs")`
    font-size: 2rem;
  `}

  ${media.between("xs", "sm")`
    font-size: 3rem;
  `}
`

const Link = styled(GatsbyLink)`
  background-image: none !important;
  color: ${(p) => p.theme.colors.primary};
  text-decoration: none;

  transition: color 200ms;

  &:hover {
    color: ${(p) => darken(0.1, p.theme.colors.primary)};
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
