import { put, takeLatest } from 'redux-saga/effects';
import { updateCardList } from './actions';
import { RESET_GAME } from './constants';

function* resetGameSaga() {
  yield put(updateCardList([]));
}

export default function* HomePageSaga() {
  yield takeLatest(RESET_GAME, resetGameSaga);
}
