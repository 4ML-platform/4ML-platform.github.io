import React, { useEffect, useState } from 'react';

import VideoContainer from './VideoContainer';
import Timeline from '../components/Timeline';
import VideoMetadata from '../components/VideoMetadata';

function DemoContainer() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("https://ml4-platform.herokuapp.com/api/v1/videos")
      .then(res => res.json())
      .then(res => {
        if (res && res.length) {
          setVideos(res);
          setSelectedVideo(res[0].id)
        }
      })
      .catch(err => {
        console.log("error ", err);
      });
  }, []);

  const onVideoSelect = (id) => {
    if (id !== null || id !== undefined) {
      setSelectedVideo(id);
    }
  }

  return (
    <>
      <VideoContainer videos={videos} selectedVideo={selectedVideo} onVideoSelect={onVideoSelect} />
      {selectedVideo && <VideoMetadata video={videos.find(video => video.id === selectedVideo)} />}
      {selectedVideo && <Timeline />}
    </>
  );
}

export default DemoContainer;