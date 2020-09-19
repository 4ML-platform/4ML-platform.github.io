import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const StyledHeader = styled.header`
  height: 80px;
  display: flex;
`;

const StyledImg = styled.img`
  height: 44px;
  margin-top: auto;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledImg src={logo} alt="logo" />
    </StyledHeader>
  );
}

export default Header;