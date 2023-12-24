import { configureStore } from "@reduxjs/toolkit";
import beersListReducer from "./Slices/beerListSlice.js";
import baskedReducer from "./Slices/basketSlice.js";
import baskedModalReducer from "./Slices/basketModal.js";
import searchOrFilterReducer from "./Slices/searchOrFilter.js";
import searchByNameReducer from "./Slices/searchByName.js";
export const store = configureStore({
  reducer: {
    beersList: beersListReducer,
    basket: baskedReducer,
    basketModal: baskedModalReducer,
    searchOrFilter: searchOrFilterReducer,
    searchByName: searchByNameReducer,
  },
});
