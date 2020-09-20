import React from 'react';
import styled from 'styled-components';
import Metadata from './Metadata';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 80px;

  @media (min-width: 768px) {
    margin-top: 120px
  }
`;

const StyledVideo = styled.video`
  margin: 0 auto;
  width: 100%;

  @media(min-width: 576px) {
    width: 80%;
  }

  @media(min-width: 768px) {
    width: 48%;
  }
`;

const VideoMetadata = React.memo(
  function ({ video: { url } }) {
    return (
      <StyledDiv>
        <StyledVideo src={url} controls />
        <Metadata />
      </StyledDiv>
    );
  }
);

export default VideoMetadata;