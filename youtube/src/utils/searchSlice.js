import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cache: (state, action) => {
      state = Object.assign(state,action.payload);
    },
  },
});

export const { cache } = searchslice.actions;

export default searchslice.reducer;
