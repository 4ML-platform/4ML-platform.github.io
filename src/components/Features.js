import React from 'react';
import styled from 'styled-components';

import FeatureCard from './FeatureCard';
import brandingInsightsImg from '../assets/branding-insights.png';
import twitterIntegrationImg from '../assets/twitter-integration.png';
import similarVideosImg from '../assets/similar-videos.png';

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
    url: brandingInsightsImg,
    title: "Branding Insights",
    text: "Track your brand in stadiums, trailers, videos to gain their duration time on screen"
  },
  {
    url: twitterIntegrationImg,
    title: "Twitter Integration",
    text: "Edit and trim your favourite part of the video and share via twitter"
  },
  {
    url: similarVideosImg,
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
        {features.map(feature => <FeatureCard feature={feature} key={feature.title} />)}
      </StyledDiv>
    </>
  );
}

export default Features;