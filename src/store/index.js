import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';

const loggerMiddleware = createLogger();

const enhancers = [];
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware); //added logger;
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const history = createBrowserHistory();
export const store = createStore(rootReducer, composedEnhancers);
