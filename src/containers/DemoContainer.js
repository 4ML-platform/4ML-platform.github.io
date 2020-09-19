import React, { useState } from 'react';

import VideoContainer from './VideoContainer';

function DemoContainer() {

  const [videos, setVideos] = useState([
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
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  const onVideoSelect = (id) => {
    if (id !== null || id !== undefined) {
      setSelectedVideo(id);
    }
  }

  return (
    <>
      <VideoContainer videos={videos} selectedVideo={selectedVideo} onVideoSelect={onVideoSelect} />
    </>
  );
}

export default DemoContainer;