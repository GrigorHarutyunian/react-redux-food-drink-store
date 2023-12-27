import { createSlice } from "@reduxjs/toolkit";

const singleBeerSlice = createSlice({
  name: "singleBeer",
  initialState: false,
  reducers: {
    thereIsModalSingleBeer: (state, action) => {
      return !state;
    },
  },
});

export const { thereIsModalSingleBeer } = singleBeerSlice.actions;
export default singleBeerSlice.reducer;
