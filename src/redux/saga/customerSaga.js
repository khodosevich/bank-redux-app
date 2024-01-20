import { put, call, takeEvery } from "redux-saga/effects"
import { addAnyCustomerR } from "../customerReducer"
import { ASYNC_SET_CUSTOMERS } from "../types"


 const fetchUsersFromApi = () =>  fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
        
function* setCustomers() {

    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addAnyCustomerR(json))
}


export function* customerWatcher () {
    yield takeEvery(ASYNC_SET_CUSTOMERS, setCustomers)
}



