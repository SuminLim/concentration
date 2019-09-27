import { CardModel } from 'types/CardModel';
import { RESET_GAME, UPDATE_CARD_LIST } from './constants';

export type HomePageAction = ReturnType<
  typeof resetGame |
  typeof updateCardList
>;

export function resetGame() {
  return <const> {
    type: RESET_GAME,
  };
}

export function updateCardList(cardList: CardModel[]) {
  return <const> {
    cardList,
    type: UPDATE_CARD_LIST,
  };
}
