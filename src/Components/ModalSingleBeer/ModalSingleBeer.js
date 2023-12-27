import "./ModalSingleBeer.css";
import "./CaruselSlider.css";
import React from "react";
import { useDispatch } from "react-redux";
import { thereIsModalSingleBeer } from "../../State/Slices/modalSingleBeer";
import { SimilarBeers } from "./SimilarBeers";
import { SingleBeer } from "./SingleBeer";
export const ModalSingleBeer = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(thereIsModalSingleBeer())}
      className="modal-single-beer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-single-beer-content"
      >
        <SingleBeer />

        <SimilarBeers />
      </div>
    </div>
  );
};
