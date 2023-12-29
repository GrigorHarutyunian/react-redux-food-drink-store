import { configureStore } from "@reduxjs/toolkit";
import beersListReducer from "./Slices/beerListSlice.js";
import baskedReducer from "./Slices/basketSlice.js";
import baskedModalReducer from "./Slices/basketModal.js";
import searchOrFilterReducer from "./Slices/searchOrFilter.js";
import searchByNameReducer from "./Slices/searchByName.js";
import singleBeerModalReducer from "./Slices/modalSingleBeer.js";
import singleBeerReducer from "./Slices/singleBeerSlice.js";
import similarBeerseReducer from "./Slices/similarBeersSlice.js";
import idSingleBeerReducer from "./Slices/idSingleBeer.js";
import similarBeersInPageReducer from "./Slices/inPageSimilarBeers.js";
import similarBeerReducer from "./Slices/SimilarBeerSlice.js";

export const store = configureStore({
  reducer: {
    beersList: beersListReducer,
    basket: baskedReducer,
    basketModal: baskedModalReducer,
    searchOrFilter: searchOrFilterReducer,
    searchByName: searchByNameReducer,
    singleBeerModal: singleBeerModalReducer,
    singleBeer: singleBeerReducer,
    singleBeerID: idSingleBeerReducer,
    similarBeers: similarBeerseReducer,
    similarBeersInPage: similarBeersInPageReducer,
    similarBeer: similarBeerReducer,
  },
});
