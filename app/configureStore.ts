/**
 * Create the store with dynamic reducers
 */

import { routerMiddleware } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (options?: {shouldHotReload}) => jest.Mock<{}>|Function;
  }
}

interface ExtendedNodeModule {
  hot: {
    accept: (path: string, func: () => void) => void;
  };
}

interface ExtendedStore extends Store {
  createReducerWithHistory: any;
  runSaga: any;
  injectedReducers: any;
  injectedSagas: any;
}

declare let module: ExtendedNodeModule;

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [responsiveStoreEnhancer, applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE
        // should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store: ExtendedStore = createStore(
    createReducer(history)(undefined),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.createReducerWithHistory = createReducer(history); // Keep createReducer function preloaded with history
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(history)(store.injectedReducers));
    });
  }

  return store;
}
