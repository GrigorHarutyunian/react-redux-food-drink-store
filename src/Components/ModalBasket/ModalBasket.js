import "./ModalBasket.css";
import { useDispatch } from "react-redux";
import { thereIsModalBasket } from "../../State/Slices/basketModal";
export const ModalBasket = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(thereIsModalBasket())} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        1
      </div>
    </div>
  );
};
