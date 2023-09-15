export const ROOT_MODULE = "COUNTER";
export const INCREMENT_TIMEOUT = `${ROOT_MODULE}/INCREMENT_TIMEOUT`;
export const DECREMENT_TIMEOUT = `${ROOT_MODULE}/DECREMENT_TIMEOUT`;

export interface CounterState {
  value: number;
};

export interface IIncrementTimeOut {
  timeout: number;
}

export interface IDecrementTimeOut {
  timeout: number;
}
