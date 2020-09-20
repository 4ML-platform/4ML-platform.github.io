import React from 'react';
import styled from 'styled-components';

import githubLogo from '../assets/github.svg';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  height: 64px;
  margin-top: 80px;

  @media (min-width: 768px) {
    margin-top: 120px
  }
`;

const StyledDiv = styled.div`
  margin-left: auto;
`;

// const StyledCopyrightDiv = sty

const Footer = React.memo(
  function () {
    return (
      <StyledFooter>
        <div>&copy;2020 4ML</div>
        <StyledDiv>
          <a href="https://github.com/4ML-platform" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="github logo" />
          </a>
        </StyledDiv>
      </StyledFooter>
    );
  }
);

export default Footer;