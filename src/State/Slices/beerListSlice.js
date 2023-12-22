import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const beerListSlice = createSlice({
  name: "beersList",
  initialState,
  reducers: {
    initialBeers: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { initialBeers } = beerListSlice.actions;
export default beerListSlice.reducer;
