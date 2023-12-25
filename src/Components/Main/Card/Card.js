import { useState } from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addFromMenu } from "../../../State/Slices/basketSlice";

export const Card = ({ descriptors }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card"
    >
      <img
        style={{ width: "40%", height: "82%" }}
        src={descriptors.image_url}
        alt="1"
      ></img>
      {isHovered ? (
        <div className="buttons-beer">
          <Button
            onClick={() => dispatch(addFromMenu(descriptors))}
            variant="contained"
          >
            Add
          </Button>
        </div>
      ) : (
        <div className="spans-beer">
          <span>{descriptors.name}</span>
          <span>{descriptors.srm}$</span>
        </div>
      )}
    </div>
  );
};
