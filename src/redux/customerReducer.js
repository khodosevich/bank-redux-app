import { ADD_CUSTOMER, GET_CUSTOMER } from "./types";

const initialState = {
    customers: []
}
export function customerReducer(state = initialState, action){
    
    switch(action.type){
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case GET_CUSTOMER:
            return {
                state,
            }
        default:
            return state
    }

}