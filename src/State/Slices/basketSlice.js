import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addFromMenu: (state, action) => {
      if (
        state.find((prevObj) => {
          return prevObj.id === action.payload.id;
        })
      ) {
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, item: obj.item + 1 };
          } else {
            return { ...obj, item: obj.item };
          }
        });
      } else {
        return [...state, { ...action.payload, item: 1 }];
      }
    },
  },
});

export const { addFromMenu } = basketSlice.actions;
export default basketSlice.reducer;
