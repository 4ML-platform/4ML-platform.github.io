import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 1px solid #434343;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 250px;
  width: 100%;

  @media(min-width: 576px) {
    width: 80%;
  }

  @media(min-width: 768px) {
    width: 48%;
  }
`;

const HeaderDiv = styled.div`
  height: 40px;
  border-bottom: 1px solid #434343;
  color: #A129FF;
  padding: 0 22px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  resize: none;
  color: #fff;
  font-size: 0.8rem;
`;

const data = {
  "articles": [
    {
      "article_name": "jeans",
      "bounding_box": {
        "x0": 700.5635986328125,
        "x1": 962.29638671875,
        "y0": 582.2620239257812,
        "y1": 719
      },
      "confidence": 0.6548234224319458
    },
    {
      "article_name": "sweater",
      "bounding_box": {
        "x0": 625.78759765625,
        "x1": 961.8466796875,
        "y0": 175.18348693847656,
        "y1": 374.39300537109375
      },
      "confidence": 0.8738155364990234
    }
  ]
};

const Metadata = React.memo(
  function () {
    const value = JSON.stringify(data, null, 2);
    return (
      <StyledDiv>
        <HeaderDiv> Data </HeaderDiv>
        <StyledTextarea disabled value={value} />
      </StyledDiv>
    );
  }
);

export default Metadata;