import { createSlice } from "@reduxjs/toolkit";
const searchByNameSlice = createSlice({
  name: "searchByName",
  initialState: "",
  reducers: {
    changeValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeValue } = searchByNameSlice.actions;
export default searchByNameSlice.reducer;
