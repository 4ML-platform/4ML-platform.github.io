import React from 'react';
import styled from 'styled-components';

import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import AboutProduct from './components/AboutProduct';


const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <BackgroundImage />
      <Container>
        <Header />
        <AboutProduct />
      </Container>
    </Wrapper>
  );
}

export default App;
