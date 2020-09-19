import React from 'react';
import styled from 'styled-components';
import Metadata from './Metadata';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
`;

const StyledVideo = styled.video`
  width: 48%;
`;

const VideoMetadata = React.memo(
  function ({ video: { videoSrc } }) {
    return (
      <StyledDiv>
        <StyledVideo src={videoSrc} controls />
        <Metadata />
      </StyledDiv>
    );
  }
);

export default VideoMetadata;