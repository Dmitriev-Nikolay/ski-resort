import React from 'react';
import styled from 'styled-components';

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 61.5px;
  width: 100%;
  opacity: 0.4;
  border-radius: 12px;
  background: linear-gradient(-90deg, #4158F6 0%, #e5e5e5 50%, #4158F6 100%);
  background-size: 400% 400%;
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  `;

const SkeletonLine = styled(SkeletonPulse)`
  width: 10px;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
  `;


const HeaderLoading: React.FC = () => {

  return (
    <SkeletonLine />
  );
};

export default HeaderLoading;