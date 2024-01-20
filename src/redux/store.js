import {applyMiddleware, combineReducers, createStore} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { thunk } from 'redux-thunk';


const defaultState = {
    customer: [],
    cash: 0
}


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));


window.store = store