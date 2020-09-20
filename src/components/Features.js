import React from 'react';
import styled from 'styled-components';

import FeatureCard from './FeatureCard';

const StyledH1 = styled.h1`
  text-align: center;
  margin: 80px 0 24px;

  @media (min-width: 768px) {
    margin-top: 120px
  }
`;

const StyledH4 = styled.h4`
  max-width: 590px;
  margin: auto;
  text-align: center;
  font-weight: 400;
`;


const features = [
  {
    url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
    title: "Branding Insights",
    text: "Track your brand in stadiums, trailers, videos to gain their duration time on screen"
  },
  {
    url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
    title: "Twitter Integration",
    text: "Edit and trim your favourite part of the video and share via twitter"
  },
  {
    url: "https://static.fotor.com.cn/assets/projects/pages/0eeff7e0-7528-11e9-9443-e356e0129bd6_2e592a62-4a05-44f5-8483-2b31549c98fe_thumb.jpg",
    title: "Similar Videos",
    text: "Watch visually similar videos within the platform"
  }
];

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Features() {
  return (
    <>
      <StyledH1>Smart AI Assistance</StyledH1>
      <StyledH4>We help creators, marketers and social media enthusiasts to gain insights through our machine learning platform</StyledH4>
      <StyledDiv>
        {features.map(feature => <FeatureCard feature={feature} />)}
      </StyledDiv>
    </>
  );
}

export default Features;