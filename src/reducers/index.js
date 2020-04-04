import { combineReducers } from 'redux';

import todos from './todos';
import counter from './counter';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  counter,
  todos,
  visibilityFilter,
});

export default rootReducer;
