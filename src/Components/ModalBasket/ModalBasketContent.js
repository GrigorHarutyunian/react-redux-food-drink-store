import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeProduct } from "../../State/Slices/basketSlice";
import { addAndSubtractProductsAmout } from "../../State/Slices/basketSlice";

import { useDispatch } from "react-redux";
export const ModalBasketContent = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="itemList">
      <img style={{ width: "3%", height: "100%" }} src={item.image_url}></img>
      <span style={{ width: "20%" }}>{item.name}</span>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          onClick={() =>
            dispatch(addAndSubtractProductsAmout({ id: item.id, state: "add" }))
          }
        >
          +
        </Button>
        <span>{item.item}</span>
        <Button
          onClick={() =>
            dispatch(
              addAndSubtractProductsAmout({ id: item.id, state: "subtract" })
            )
          }
        >
          -
        </Button>
      </ButtonGroup>
      <span style={{ width: "10%" }}>{item.srm * item.item} $</span>
      <Button
        onClick={() => dispatch(removeProduct(item.id))}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};
