import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;