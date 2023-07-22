import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    value: 0,
  },

  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    toSquare(state) {
      state.value *= state.value;
    },
  },
});

export const { increment, decrement, toSquare } = countSlice.actions;
export default countSlice.reducer;
