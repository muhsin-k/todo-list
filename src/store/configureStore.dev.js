import { createStore, applyMiddleware, compose } from 'redux';
// redux-thunk  -handle asynchronous actions in Redux.
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import rootReducer from './reducers';
// Compose-Used to pass multiple store enhancers to the store
// preloadedState (optional): represents initial redux state (rendered on
// server)
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, loadingBarMiddleware(), createLogger()),
      /* eslint no-underscore-dangle: "off" */
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
