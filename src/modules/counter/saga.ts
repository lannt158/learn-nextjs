import { PayloadAction } from "@reduxjs/toolkit";
import { IDecrementTimeOut, IIncrementTimeOut } from "./models";
import { call, put } from "redux-saga/effects";
import { decrement, increment } from "./reducer";

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export function* incrementTimeOutFn(action: PayloadAction<IIncrementTimeOut>) {
  const { timeout } = action.payload;
  yield call(delay, timeout);
  yield put(increment());
}
export function* decrementTimeOutFn(action: PayloadAction<IDecrementTimeOut>) {
  const { timeout } = action.payload;
  yield call(delay, timeout);
  yield put(decrement());
}
