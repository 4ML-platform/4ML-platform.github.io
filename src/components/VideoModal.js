import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.2s;
    z-index: 9999;
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    overflow: auto;
`;

const StyledVideo = styled.video`
  position: relative;
  height: max-content;
  width: 749px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 48px;
  padding: 28px 18px;
`;

const onVideoClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
}

function VideoModal({ url, isOpen, close }) {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const video = isOpen ? <StyledVideo controls src={url} onClick={onVideoClick}></StyledVideo> : null;
  return <StyledDiv onClick={close} isOpen={isOpen}>{video}</StyledDiv>;
}

export default VideoModal;