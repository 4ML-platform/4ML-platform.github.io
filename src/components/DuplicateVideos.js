import React, { useState } from 'react';
import styled from 'styled-components';

import VideoCard from './VideoCard';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledH1 = styled.h1`
  text-align: center;
  margin: 120px 0 24px;
`;

function DuplicateVideos() {
  const [videos] = useState([
    {
      url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
      id: 0
    },
    {
      url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
      id: 1
    },
    {
      url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
      id: 2
    },
    {
      url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
      id: 3
    },
    {
      url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
      id: 4
    }
  ]);

  return (
    <>
      <StyledH1>Near Duplicates</StyledH1>
      <StyledDiv>
        {videos.map(video => <VideoCard video={video} key={video.id} ></VideoCard>)}
      </StyledDiv>
    </>
  );
}

export default DuplicateVideos;