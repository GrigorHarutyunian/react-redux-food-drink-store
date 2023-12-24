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

    addAndSubtractProductsAmout: (state, action) => {
      return state.map((beer) => {
        if (
          action.payload.state === "subtract" &&
          beer.id === action.payload.id &&
          beer.item > 0
        ) {
          return { ...beer, item: beer.item - 1 };
        }
        if (action.payload.state === "add" && beer.id === action.payload.id) {
          return { ...beer, item: beer.item + 1 };
        }
        return beer;
      });
    },

    removeProduct: (state, action) => {
      return state.filter((val) => {
        return val.id !== action.payload;
      });
    },
  },
});

export const { addFromMenu, addAndSubtractProductsAmout, removeProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
