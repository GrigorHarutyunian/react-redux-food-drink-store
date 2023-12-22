import { initialBeers } from "./beerListSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useFetchBeers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((res) => res.json())
      .then((res) => {
        res = res.slice(0, 18);
        dispatch(initialBeers(res));
      });
  }, [dispatch]);
};
