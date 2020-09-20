import React, { useState } from 'react';
import styled from 'styled-components';

import VideoCard from './VideoCard';
import VideoModal from './VideoModal';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledH1 = styled.h1`
  text-align: center;
  margin: 80px 0 24px;

  @media (min-width: 768px) {
    margin-top: 120px;
  }
`;

function DuplicateVideos({ videos }) {

  const [selectedVideo, setSelectedVideo] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const onVideoSelect = (url) => {
    setSelectedVideo(url);
    setIsOpen(true);
  };

  return (
    <>
      <StyledH1>Near Duplicates</StyledH1>
      <StyledDiv>
        {videos.map((video, i) => <VideoCard video={{ url: video, id: video }} key={i} onVideoSelect={onVideoSelect} ></VideoCard>)}
      </StyledDiv>
      <VideoModal url={selectedVideo} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
}

export default DuplicateVideos;