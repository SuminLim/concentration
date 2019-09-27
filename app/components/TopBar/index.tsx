import React from 'react';
import styled from 'styled-components';
import StartButton from 'components/StartButton';
import TimeStamp from '../TimeStamp';

interface TopBarProps {
  clickCount: number;
  time: number;

  onClickStart: () => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const TopBar: React.FC<TopBarProps> = ({ clickCount, time, onClickStart }) => {
  return (
    <Wrapper>
      <div>
        {clickCount} 회 시도!
      </div>

      <TimeStamp>{time}</TimeStamp>

      <StartButton onClick={onClickStart}>
        시작하기
      </StartButton>
    </Wrapper>
  );
};

export default TopBar;
