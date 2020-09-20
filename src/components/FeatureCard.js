import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  margin: 24px 0;
  width: 30%;
`;

const StyledImgDiv = styled.div`
  background: #121212;
  border: 1px solid #29FFBF;
  box-sizing: border-box;
  box-shadow: 0px 12px 30px #081B15;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%
`;

const StyledTitle = styled.h3`
  margin-top: 40px;
`;

const StyledText = styled.div`
  font-size: 0.9rem;
`;

function FeatureCard({ feature: { url, title, text } }) {
  return (
    <StyledDiv>
      <StyledImgDiv>
        <StyledImg src={url} />
      </StyledImgDiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledDiv>
  );
}

export default FeatureCard;