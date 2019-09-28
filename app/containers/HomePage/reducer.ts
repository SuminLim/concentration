import { CardModel } from '../../types/CardModel';
import { HomePageAction } from './actions';
import { UPDATE_CARD_LIST } from './constants';

export const initialState: { cardList: CardModel[] } = {
  cardList: [],
};

function homeReducer(state = initialState, action: HomePageAction) {
  switch (action.type) {
    case UPDATE_CARD_LIST:
      return { cardList: action.cardList };
    default:
      return state;
  }
}

export default homeReducer;
