import "./ModalSingleBeer.css";
import "./CaruselSlider.css";
import React from "react";
import { useDispatch } from "react-redux";
import { thereIsModalSingleBeer } from "../../State/Slices/modalSingleBeer";
import { SimilarBeers } from "./SimilarBeers";
import { SingleBeer } from "./SingleBeer";
import { useSelector } from "react-redux";
import { useFetchSingleBeer } from "../../State/Slices/beerListApi";
import { useFetchSimilarBeers } from "../../State/Slices/beerListApi";
import { removeActucalList } from "../../State/Slices/inPageSimilarBeers";
import { removeSimilarBeer } from "../../State/Slices/SimilarBeerSlice";

export const ModalSingleBeer = () => {
  const beerID = useSelector((store) => store.singleBeerID);
  useFetchSingleBeer(beerID);
  const dispatch = useDispatch();
  const beer = useSelector((store) => store.singleBeer[0]);
  const similarBeer = useSelector((store) => store.similarBeer);
  const similarBeersInPage = useSelector((store) => store.similarBeersInPage);

  useFetchSimilarBeers(similarBeer, beerID);

  const handleRemoveSimilarBeer = () => {
    dispatch(removeSimilarBeer());
    dispatch(thereIsModalSingleBeer());
    dispatch(removeActucalList());
  };

  return (
    <div onClick={handleRemoveSimilarBeer} className="modal-single-beer">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-single-beer-content"
      >
        <SingleBeer beer={beer} />

        <SimilarBeers similarBeersInPage={similarBeersInPage} />
      </div>
    </div>
  );
};
