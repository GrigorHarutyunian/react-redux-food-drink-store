import { createSlice } from "@reduxjs/toolkit";

const singleBeerSlice = createSlice({
  name: "singleBeer",
  initialState: [],
  reducers: {
    setBeer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBeer } = singleBeerSlice.actions;
export default singleBeerSlice.reducer;
