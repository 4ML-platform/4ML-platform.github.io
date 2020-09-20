import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  line-height: 3rem;
  margin: 28px 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledH4 = styled.h4`
  max-width: 590px;
  margin: auto;
  text-align: center;
  font-weight: 400;
`;

function AboutProduct() {
  return (
    <>
      <StyledH1>Discover. Analyze. Share.</StyledH1>
      <StyledH4>A Smart AI platform that lets you customise your meta, discover similar videos and share it with the world via twitter.</StyledH4>
    </>
  );
}

export default AboutProduct;