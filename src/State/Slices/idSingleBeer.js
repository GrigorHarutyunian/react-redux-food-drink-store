import { createSlice } from "@reduxjs/toolkit";

const idSingleBeerSlice = createSlice({
  name: "singleBeerID",
  initialState: false,
  reducers: {
    setId: (state, action) => {
      return action.payload;
    },
  },
});
export const { setId } = idSingleBeerSlice.actions;
export default idSingleBeerSlice.reducer;
