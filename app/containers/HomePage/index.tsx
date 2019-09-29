/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Card from 'components/Card';
import TopBar from 'components/TopBar';
import { get as _get, head as _head, shuffle as _shuffle } from 'lodash';
import React, { useReducer, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { CardModel, mapCardValueToCardModel } from '../../types/CardModel';
import { CARD_SET, RESET_GAME, UPDATE_CARD_LIST } from './constants';
import messages from './messages';
import homeReducer, { initialState } from './reducer';

interface HomePagePropsFromState {

}

interface HomePagePropsFromDispatch {

}

type HomePageProps = HomePagePropsFromState & HomePagePropsFromDispatch;

const CardListWrapper = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  margin: -10px;
  width: 700px;

  > * {
    flex-basis: 140px;
    margin: 10px;
  }
`;

const HomePage: React.FC<HomePageProps> = ({  }) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [openedCard, setOpenedCard] = useState<CardModel>();
  const [{ cardList }, dispatch] = useReducer(homeReducer, initialState);

  function handleRestart() {
    setClickCount(0);

    const cardList: CardModel[] = _shuffle(CARD_SET).map((value, index) => mapCardValueToCardModel(value, index));
    dispatch({ cardList, type: UPDATE_CARD_LIST });
  }

  function makeHandleOnClickCard(selectedCard: CardModel) {
    return () => {
      if (openedCard) {
        // 맞추었을 때와 틀렸을 때 분기
        if (openedCard.value === selectedCard.value) {
          openedCard.isHit = true;
          selectedCard.isHit = true;
          openedCard.isOpen = true;
          selectedCard.isOpen = true;
        } else {
          openedCard.isHit = false;
          selectedCard.isHit = false;
          openedCard.isOpen = false;
          selectedCard.isOpen = false;
        }
        setOpenedCard(undefined);
      } else {
        selectedCard.isOpen = true;
        setOpenedCard(selectedCard);
      }
      setClickCount(clickCount + 1);
    };
  }

  function renderCardNodeList() {
    return cardList.map((card: CardModel, index) => (
      <Card
        key={`${card.value}-${index}`}
        isOpen={card.isOpen}
        isHit={card.isHit}
        onClick={makeHandleOnClickCard(card)}
      >
        {card.value}
      </Card>
    ));
  }

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TopBar
        clickCount={clickCount}
        time={0}
        onClickStart={handleRestart}
      />
      <CardListWrapper>
        {
          cardList &&
          renderCardNodeList()
        }
      </CardListWrapper>
    </div>
  );
};

export default HomePage;
