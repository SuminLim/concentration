import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const TimeStamp: React.FC = ({ children }) => {
  return (
    <Wrapper>
      걸린 시간: {children} 초!
    </Wrapper>
  );
};

export default TimeStamp;
