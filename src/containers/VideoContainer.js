import React, { useState } from 'react';
import styled from 'styled-components';

import VideosWrapper from '../components/VideosWrapper';

const StyledH5 = styled.h5`
  max-width: 590px;
  margin: 48px auto 12px;
  text-align: center;
  font-weight: 400;
`;

const StyledButton = styled.button`
  background: #A129FF;
  border-radius: 26px;
  border-color: #A129FF;
  border: none;
  color: #fff;
  padding: 12px 35px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  margin: 12px auto 0;
  display: block;
`;

function VideoContainer({ videos, selectedVideo, onVideoSelect }) {

  const [selectedVideoId, setSelectedVideoId] = useState(selectedVideo);

  return (
    <>
      <StyledH5>Try it out by selecting any video from below</StyledH5>
      <VideosWrapper videos={videos} selectedVideo={selectedVideoId} onVideoSelect={setSelectedVideoId} />
      <StyledButton onClick={() => onVideoSelect(selectedVideoId)}>Process</StyledButton>
    </>
  );
}

export default VideoContainer;
