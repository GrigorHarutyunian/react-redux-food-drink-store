import { createSlice } from "@reduxjs/toolkit";

const beerListSlice = createSlice({
  name: "beersList",
  initialState: [],
  reducers: {
    initialBeers: (state, action) => {
      return action.payload;
    },

    addInScrolling: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { initialBeers, addInScrolling } = beerListSlice.actions;
export default beerListSlice.reducer;
