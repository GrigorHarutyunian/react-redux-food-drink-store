import { createSlice } from "@reduxjs/toolkit";
const basketModalSlice = createSlice({
  name: "basketModal",
  initialState: false,
  reducers: {
    thereIsModalBasket: (state, action) => {
      return !state;
    },
  },
});

export const { thereIsModalBasket } = basketModalSlice.actions;
export default basketModalSlice.reducer;
