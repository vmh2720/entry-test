import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers/appReducers';

const Store = createStore(appReducers, applyMiddleware(thunk));

export default Store;
