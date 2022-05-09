// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // it's okay to do this because immer makes it immutable under the hood
    incremented(state) {
      state.value++;
    },
    // decrement
    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
