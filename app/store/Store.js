import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';

const Reducers = {
    appData: Reducer
};

const Store = createStore(combineReducers(Reducers), applyMiddleware(thunk));

export default Store;
