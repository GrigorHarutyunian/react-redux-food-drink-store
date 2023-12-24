import { createSlice } from "@reduxjs/toolkit";

const beerListSlice = createSlice({
  name: "beersList",
  initialState: [],
  reducers: {
    initialBeers: (state, action) => {
      return action.payload.map((obj) => {
        return {
          image_url: obj.image_url,
          id: obj.id,
          name: obj.name,
          srm: obj.srm,
        };
      });
    },

    addInScrolling: (state, action) => {
      const newArr = action.payload.map((obj) => {
        return {
          image_url: obj.image_url,
          id: obj.id,
          name: obj.name,
          srm: obj.srm,
        };
      });
      return [...state, ...newArr];
    },
  },
});

export const { initialBeers, addInScrolling } = beerListSlice.actions;
export default beerListSlice.reducer;
