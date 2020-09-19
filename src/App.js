import React from 'react';
import styled from 'styled-components';

import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import AboutProduct from './components/AboutProduct';
import Features from './components/Features';
import DemoContainer from './containers/DemoContainer';
import DuplicateVideos from './components/DuplicateVideos';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
`;

function App() {
  return (
    <Wrapper>
      <BackgroundImage />
      <Container>
        <Header />
        <AboutProduct />
        <DemoContainer />
        <DuplicateVideos />
        <Features />
      </Container>
    </Wrapper>
  );
}

export default App;
