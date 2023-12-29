import { createSlice } from "@reduxjs/toolkit";
const similarBeersSlice = createSlice({
  name: "similarBeers",
  initialState: {},

  reducers: {
    addSimilarBeer: (state, { payload }) => {
      const { id, data } = payload;
      return { ...state, [id]: data };
    },
  },
});

export const { addSimilarBeer } = similarBeersSlice.actions;
export default similarBeersSlice.reducer;
