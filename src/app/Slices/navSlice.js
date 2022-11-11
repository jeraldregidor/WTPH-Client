import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fillPos: 1,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setfillPos: (state, action) => {
      state.fillPos = action.payload < 1 ? 1 : action.payload;
    },
  },
});

export const { setfillPos } = navSlice.actions;

export default navSlice.reducer;
