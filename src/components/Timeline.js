import React, { useEffect } from 'react';

import data from '../utils/timelinedata.json';
import { showTimeline } from '../utils/timeline';

function Timeline() {

  useEffect(() => {
    showTimeline('timeline-embed', data.result, onClickHandler);
  });

  const onClickHandler = (e) => {
    console.log("in timeline componenet ", e);
  }

  return <div id="timeline-embed" style={{ marginTop: "40px" }} ></div>;
}

export default Timeline;