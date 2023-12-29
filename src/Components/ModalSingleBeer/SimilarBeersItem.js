import "./CaruselSlider.css";
import { useDispatch } from "react-redux";
import { setId } from "../../State/Slices/idSingleBeer";
import { addSimilarBeer } from "../../State/Slices/SimilarBeerSlice";
import { removeSimilarBeer } from "../../State/Slices/SimilarBeerSlice";
import { removeActucalList } from "../../State/Slices/inPageSimilarBeers";
export const SimilarBeerItem = ({ description }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setId(description.id));
        dispatch(removeSimilarBeer());
        dispatch(removeActucalList());
        dispatch(addSimilarBeer(description));
      }}
      className="similarBeer"
    >
      <img
        style={{ width: "64px", height: "128px" }}
        src={description.image_url}
      />
      {/* <span style={{ fontSize: "20px" }}>{description.name}</span> */}
    </div>
  );
};
