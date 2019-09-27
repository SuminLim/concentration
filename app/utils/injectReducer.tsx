const hoistNonReactStatics = require('hoist-non-react-statics');
import * as PropTypes from 'prop-types';
import * as React from 'react';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default function injectReducer<P>({ key, reducer }: {key: string, reducer: Function}): (WrappedComponent: React.ComponentType<P>) => React.ComponentType<P> {
  return (WrappedComponent) => {
    class ReducerInjector extends React.Component<P> {
      static WrappedComponent = WrappedComponent;
      static displayName = `withReducer(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'})`;
      static contextTypes = {
        store: PropTypes.object.isRequired,
      };

      componentWillMount() {
        const { injectReducer } = this.injectors;

        injectReducer(key, reducer);
      }

      injectors = getInjectors(this.context.store);

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };
}
