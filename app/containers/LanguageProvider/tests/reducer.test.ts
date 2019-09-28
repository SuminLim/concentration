import ActionTypes from '../constants';
import languageProviderReducer from '../reducer';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {} as any)).toEqual({
      locale: 'en',
    });
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: ActionTypes.CHANGE_LOCALE,
        locale: 'de',
      }),
    ).toEqual({
      locale: 'de',
    });
  });
});
