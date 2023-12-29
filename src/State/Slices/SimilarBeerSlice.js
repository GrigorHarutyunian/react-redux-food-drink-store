import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const similarBeerSlice = createSlice({
  name: "similarBeer",
  initialState,
  reducers: {
    addSimilarBeer: (state, action) => {
      return action.payload;
    },
    removeSimilarBeer: (state, action) => initialState,
  },
});

export const { addSimilarBeer, removeSimilarBeer } = similarBeerSlice.actions;
export default similarBeerSlice.reducer;
