import React, { useEffect, useState } from 'react';

import VideoContainer from './VideoContainer';
import Timeline from '../components/Timeline';
import VideoMetadata from '../components/VideoMetadata';
import DuplicateVideos from '../components/DuplicateVideos';
import { getDuplicateVideos, getVideos } from '../utils/http';

function DemoContainer() {

  const [videos, setVideos] = useState([]);
  const [duplicateVideos, setDuplicateVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    getVideos()
      .then(res => {
        if (res && res.length) {
          setVideos(res);
          setSelectedVideo(res[0].id);
          onVideoSelect(res[0].id);
        }
      })
      .catch(err => {
        console.log("error ", err);
      });
  }, []);

  const onVideoSelect = (id) => {
    if (id !== null || id !== undefined) {
      setSelectedVideo(id);
      getDuplicateVideos(id)
        .then(res => {
          if (res && res.length) {
            setDuplicateVideos(res);
          }
        });
    }
  }

  return (
    <>
      <VideoContainer videos={videos} selectedVideo={selectedVideo} onVideoSelect={onVideoSelect} />
      {selectedVideo && <VideoMetadata video={videos.find(video => video.id === selectedVideo)} />}
      {selectedVideo && <Timeline />}
      {duplicateVideos && <DuplicateVideos videos={duplicateVideos} />}
    </>
  );
}

export default DemoContainer;