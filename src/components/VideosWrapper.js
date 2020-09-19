import React from 'react';
import styled from 'styled-components';

import VideoCard from './VideoCard';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function VideosWrapper({ videos, selectedVideo, onVideoSelect }) {
  return (
    <StyledDiv>
    {videos.map(video => <VideoCard video={video} key={video.id} selected={video.id === selectedVideo} onVideoSelect={onVideoSelect}></VideoCard>)}
  </StyledDiv>
  );
}

export default VideosWrapper;