import {put, takeEvery} from 'redux-saga/effects'
import { addCash, getCash } from '../cashReducer'
import { ASYNC_ADD_CASH , ASYNC_GET_CASH} from '../types'

const deley = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker  () {
    yield deley(1000)
    yield put(addCash(1))
}

function* decrementWorker  () {
    console.log('get')
    yield deley(1000)
    yield put(getCash(1))
}


export function* countWatcher  () {
    yield takeEvery(ASYNC_ADD_CASH,incrementWorker)
    yield takeEvery(ASYNC_GET_CASH,decrementWorker)
}