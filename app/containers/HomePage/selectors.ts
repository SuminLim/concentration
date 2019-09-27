import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectCardList = () => createSelector(selectHome, state => state.get('cardList'));

export {
  makeSelectCardList,
};
