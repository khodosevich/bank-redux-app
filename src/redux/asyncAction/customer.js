import { addAnyCustomerR } from "../customerReducer"

export const fetchCustomer = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addAnyCustomerR(json)))
    }
}