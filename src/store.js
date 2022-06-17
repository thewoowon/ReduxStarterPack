import { applyMiddleware, createStore } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';

import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';


const logger = createLogger();
const store = createStore(modules,applyMiddleware(ReduxThunk,logger));

export default store;