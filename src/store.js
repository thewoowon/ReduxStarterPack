import { applyMiddleware, createStore } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'


const logger = createLogger();
const customizedPromiseMiddelware = promiseMiddleware({
    promiseTypeSuffixes:['_PENDING','SUCCESS','FAILURE']
});

const store = createStore(modules,applyMiddleware(ReduxThunk,logger));

export default store;