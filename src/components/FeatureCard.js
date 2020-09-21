import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  margin: 24px auto;
  width: 100%;

  @media(min-width: 576px) {
    width: 48%;
  }

  @media(min-width: 768px) {
    width: 30%;
  }
`;

const StyledImgDiv = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%
`;

const StyledH3 = styled.h3`
  margin-top: 12px;
  padding: 0 12px;

  @media(min-width: 768px) {
    margin-top: 24px;
    padding: 0 24px;
  }
`;

const StyledP = styled.p`
  font-size: 0.9rem;
  padding: 0 12px;

  @media(min-width: 768px) {
    padding: 0 24px;
  }
`;

function FeatureCard({ feature: { url, title, text } }) {
  return (
    <StyledDiv>
      <StyledImgDiv>
        <StyledImg src={url} />
      </StyledImgDiv>
      <StyledH3>{title}</StyledH3>
      <StyledP>{text}</StyledP>
    </StyledDiv>
  );
}

export default FeatureCard;