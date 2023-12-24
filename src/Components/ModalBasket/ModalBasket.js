import "./ModalBasket.css";
import { useDispatch } from "react-redux";
import { thereIsModalBasket } from "../../State/Slices/basketModal";
import { ModalBasketContent } from "./ModalBasketContent";
import { useSelector } from "react-redux";
export const ModalBasket = ({ basketList }) => {
  const totalPrice = useSelector((store) => store.basket);

  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(thereIsModalBasket())} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <span>Shopping Cart</span>
        {basketList.map((item) => {
          return <ModalBasketContent key={item.id} item={item} />;
        })}
        <span style={{ position: "absolute", right: "8px", bottom: "0px" }}>
          Total{" "}
          {totalPrice.reduce((acc, val) => {
            return acc + val.item * val.srm;
          }, 0)}
          $
        </span>
      </div>
    </div>
  );
};
