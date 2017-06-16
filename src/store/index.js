import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers/index';

export default createStore(
  reducers,
  applyMiddleware(logger),
);
