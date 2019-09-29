import bind from 'bind-decorator';
import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: string;

  isOpen: boolean;
  isHit: boolean;

  onClick: () => void;
}

const Wrapper = styled.div<{ isOpen: boolean, isHit?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 180px;
  border: 1px solid ${({ isHit }) => isHit && 'green'};
  border-radius: 5px;
  cursor: ${({ isOpen, isHit }) => isOpen || isHit ? 'not-allowed' : 'pointer'};

  :hover {
    background-color: lightskyblue;
  }

  ${({ isOpen }) => isOpen ? '' : `
    background-color: lightgray;
  `}
`;

class Card extends React.Component<CardProps> {
  @bind
  private handleOnClickCard() {
    const {
      isOpen,
      isHit,
      onClick,
    } = this.props;

    if (!isHit && !isOpen) {
      onClick();
    }
  }

  public render() {
    const {
      children,
      isOpen,
      isHit,
    } = this.props;

    return (
      <Wrapper
        isOpen={isOpen}
        isHit={isHit}
        onClick={this.handleOnClickCard}
      >
        {
          isOpen ? children : '(뒷면)'
        }
      </Wrapper>
    );
  }
}

export default Card;
