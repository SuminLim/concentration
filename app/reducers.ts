/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux-immutable';
import { responsiveStateReducer } from 'redux-responsive';
import homeReducer from './containers/HomePage/reducer';
import languageProviderReducer from './containers/LanguageProvider/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(history) {
  return injectedReducers => combineReducers({
    router: connectRouter(history),
    global: homeReducer,
    language: languageProviderReducer,
    browser: responsiveStateReducer,
    ...injectedReducers,
  });
}
