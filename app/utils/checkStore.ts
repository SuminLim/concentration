import * as invariant from 'invariant';

/**
 * 주어진 객체가 IStore interface인지 확인합니다.
 * @param store 비교할 객체
 */
function isIStore(store: any): boolean {
  const keys: string[] = [
    'dispatch',
    'subscribe',
    'getState',
    'replaceReducer',
    'runSaga',
    'injectedReducers',
    'injectedSagas',
  ];

  for (const key of keys) {
    if (!(key in store) || !store[key]) {
      return false;
    }
  }
  return true;
}

/**
 * Validate the shape of redux store
 * TypeScript로 컴파일 타임에서 체크할 수 있다.
 * 나중에 확신이 생기면 삭제 하기
 */
export default function checkStore(store: any) {
  invariant(
    isIStore(store),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
