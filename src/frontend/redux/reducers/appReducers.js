import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const appReducers = combineReducers({
  itemsReducer,
});

export default appReducers;
