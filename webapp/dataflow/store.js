import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'obisidian';

import task from './task/reducer';
import processor from './processor/reducer';

const reducers = combineReducers({ task, processor });

export default createStore(reducers, applyMiddleware(apiMiddleware));