import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/top-background.png'

const Img = styled.img`
  position: absolute;
  display: block;
  top: -169px;
  width: 1909.81px;
  opacity: 0.8;
  width: 100%;
  z-index: -1;
`;

function BackgroundImage() {
  return <Img src={backgroundImage} />
}

export default BackgroundImage;