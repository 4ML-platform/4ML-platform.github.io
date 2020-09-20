import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const StyledHeader = styled.header`
  height: 64px;
  display: flex;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const StyledImg = styled.img`
  height: 32px;
  margin-top: auto;

  @media (min-width: 768px) {
    height: 44px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledImg src={logo} alt="logo" />
    </StyledHeader>
  );
}

export default Header;