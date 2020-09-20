import React from 'react';
import styled from 'styled-components';

import playIcon from '../assets/play.svg';

const StyledDiv = styled.div`
  border: 2px solid ${props => props.selected ? "#A129FF" : "#434343"};
  border-radius: 8px;
  width: 220px;
  height: 125px;
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  display: block;
`;

const StyledPlayImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
`;

const VideoCard = React.memo(
  function ({ video: { thumbnail, id }, selected, onVideoSelect }) {
    return (
      <StyledDiv selected={selected} onClick={() => onVideoSelect(id)}>
        <StyledImg src={thumbnail} />
        <StyledPlayImg src={playIcon} />
      </StyledDiv>
    );
  }
);

export default VideoCard;