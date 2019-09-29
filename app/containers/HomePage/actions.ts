import { CardModel } from 'types/CardModel';
import { UPDATE_CARD_LIST } from './constants';

export type HomePageAction = ReturnType<
  typeof updateCardList
>;

export function updateCardList(cardList: CardModel[]) {
  return <const> {
    cardList,
    type: UPDATE_CARD_LIST,
  };
}
