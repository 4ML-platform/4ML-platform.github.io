import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  margin: 120px 0 24px;
`;

const StyledH4 = styled.h4`
  max-width: 590px;
  margin: auto;
  text-align: center;
  font-weight: 400;
`;

function Features() {
  return (
    <>
      <StyledH1>Smart AI Assistance</StyledH1>
      <StyledH4>We help creators, marketers and social media enthusiasts to gain insights through our machine learning platform</StyledH4>
    </>
  );
}

export default Features;