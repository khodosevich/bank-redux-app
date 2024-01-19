import {combineReducers, createStore} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';


const defaultState = {
    customer: [],
    cash: 0
}


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer);


window.store = store