import {applyMiddleware, combineReducers, createStore} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga';
import { thunk } from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()
const defaultState = {
    customer: [],
    cash: 0
}


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk,sagaMiddleware));

sagaMiddleware.run(rootWatcher)

window.store = store