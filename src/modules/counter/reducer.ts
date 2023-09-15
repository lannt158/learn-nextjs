import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./models";

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export const { reducer } = counterSlice;
