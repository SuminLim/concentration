import React from 'react';
import styled from 'styled-components';
import StartButton from 'components/StartButton';

interface TopBarProps {
  onClickStart: () => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const TopBar: React.FC<TopBarProps> = ({ onClickStart }) => {
  return (
    <Wrapper>
      <div>
        {/*  timestamp*/}
      </div>
      <StartButton onClick={onClickStart}>
        시작하기
      </StartButton>
    </Wrapper>
  );
};

export default TopBar;
