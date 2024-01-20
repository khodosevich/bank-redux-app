import { GET_CASH } from "./types"
import { ADD_CASH } from "./types"


const defaultState = {
    cash: 0
}
export function cashReducer(state = defaultState, action){
    
    switch(action.type){
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }

}


export const addCash = (payload) => ({ type: ADD_CASH,payload })
export const getCash = (payload) => ({ type: GET_CASH, payload })