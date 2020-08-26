import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 4rem;
  padding: 0 ${(p) => p.theme.gutters.sidePadding};
  overflow: hidden;
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${p => p.theme.breakpoints.lg};;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;


export default ({ children }) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
);
