import { ADD_CUSTOMER, DELETE_CUSTOMER, ADD_ANY_CUSTOMER } from "./types";

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
        case DELETE_CUSTOMER:
            return {
                ...state, customers: [...state.customers.filter(item => item.name !== action.payload.name)]
            }
        case ADD_ANY_CUSTOMER: 
            return {
                ...state, customers: [...state.customers, ...action.payload]
            }
        default:
            return state
    }

}

export const addCustomerR = (payload) => ({type: ADD_CUSTOMER,payload})
export const deleteCustomerR = (payload) => ({type: DELETE_CUSTOMER, payload})
export const addAnyCustomerR = (payload) => ({type: ADD_ANY_CUSTOMER, payload})