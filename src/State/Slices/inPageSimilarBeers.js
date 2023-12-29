import { createSlice } from "@reduxjs/toolkit";

const inPageSimilarBeer = createSlice({
  name: "similarBeersInPage",
  initialState: [],
  reducers: {
    actualList: (state, action) => {
      return action.payload;
    },
    removeActucalList: () => {
      return [];
    },
  },
});

export const { actualList, removeActucalList } = inPageSimilarBeer.actions;
export default inPageSimilarBeer.reducer;
