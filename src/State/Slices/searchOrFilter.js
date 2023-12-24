import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const searchOrFilterSlice = createSlice({
  name: "searchOrFilter",
  initialState: false,
  reducers: {
    searchOrFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { searchOrFilter } = searchOrFilterSlice.actions;
export default searchOrFilterSlice.reducer;
