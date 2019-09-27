import * as React from 'react';
import styled from 'styled-components';

interface CardProps {

}

interface CardState {
  isOpen: boolean;
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 180px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: lightskyblue;
  }

  ${({ isOpen }) => isOpen ? '' : `
    background-color: lightgray;
  `}
`;

class Card extends React.Component<CardProps, CardState> {
  public readonly state: Readonly<CardState> = {
    isOpen: false,
  };

  constructor(props: CardProps) {
    super(props);

    this.handleOnClickCard = this.handleOnClickCard.bind(this);
  }


  private handleOnClickCard() {
    this.setState(state => (
      {
        isOpen: !state.isOpen,
      }
    ));
  }

  public render() {
    const {
      children,
    } = this.props;
    const {
      isOpen,
    } = this.state;

    return (
      <Wrapper
        isOpen={isOpen}
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
