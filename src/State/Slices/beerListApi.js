import { initialBeers } from "./beerListSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { addInScrolling } from "./beerListSlice";
import { useSelector } from "react-redux";
import { searchOrFilter } from "./searchOrFilter";
import { setBeer } from "./singleBeerSlice";

export const useFetchBeers = (name) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const a = "page=1&per_page=18";
    let b = `beer_name=${name}`;
    let c = `beer_name=[]`;
    let key;
    if (name === "") {
      dispatch(searchOrFilter(false));
      key = a;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
      key = c;
      dispatch(searchOrFilter(true));
    } else {
      key = b;
      dispatch(searchOrFilter(true));
    }
    async function fetchNewBeer() {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?${key}`);
        const data = await response.json();
        dispatch(initialBeers(data));
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }

    let debounceTimeout = setTimeout(() => {
      fetchNewBeer();
    }, 1000);
    return () => clearTimeout(debounceTimeout);
  }, [dispatch, name]);
};

export const useFetchBeersScroll = () => {
  const page = useRef(2);
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    rootMargin: "0px 0px 200px 0px",
  });
  const searchOrFilter = useSelector((store) => store.searchOrFilter);

  useEffect(() => {
    async function addInScroll() {
      const nextPage = page.current + 1;
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?page=${nextPage}&per_page=9`
        );
        const data = await response.json();
        page.current = nextPage;
        dispatch(addInScrolling(data));
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }
    if (inView && !searchOrFilter) {
      const debounceTimeout = setTimeout(() => {
        addInScroll();
      }, 1000);
      return () => clearTimeout(debounceTimeout);
    }
  }, [inView, dispatch]);

  return { ref };
};

export const useFetchSingleBeer = (beerId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (beerId) {
        try {
          const response = await fetch(
            `https://api.punkapi.com/v2/beers/${beerId}`
          );
          const data = await response.json();
          dispatch(setBeer(data));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [beerId]);
};
