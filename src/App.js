import React from 'react';
import styled from 'styled-components';

import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import AboutProduct from './components/AboutProduct';
// import Features from './components/Features';
import DemoContainer from './containers/DemoContainer';
import Footer from './components/Footer';

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
        {/* <Features /> */}
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default App;
