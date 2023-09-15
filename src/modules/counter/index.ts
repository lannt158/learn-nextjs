import { createAction } from "@reduxjs/toolkit";
import * as Models from './models';
import * as FuncSaga from './saga';
import { takeLatest } from "redux-saga/effects";
import { reducer as counterReducer } from './reducer';

export const incrementTimeOut =  createAction<Models.IIncrementTimeOut>(Models.INCREMENT_TIMEOUT)
export const decrementTimeOut =  createAction<Models.IDecrementTimeOut>(Models.DECREMENT_TIMEOUT)

function* counterSaga() {
    yield takeLatest(incrementTimeOut, FuncSaga.incrementTimeOutFn)
    yield takeLatest(decrementTimeOut, FuncSaga.decrementTimeOutFn)
}

export {counterReducer, counterSaga}
