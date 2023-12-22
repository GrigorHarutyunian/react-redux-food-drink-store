import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { useSelector } from "react-redux";
import { useFetchBeers } from "./State/Slices/beerListApi";
import { ModalBasket } from "./Components/ModalBasket/ModalBasket";
import { useDispatch } from "react-redux";
import { thereIsModalBasket } from "./State/Slices/basketModal";
function App() {
  useFetchBeers();
  const beersList = useSelector((store) => store.beersList);
  const basketList = useSelector((store) => store.basket);
  const allItemsCount = basketList.reduce((acc, val) => {
    return acc + val.item;
  }, 0);
  const thereIsModalBasketOpen = useSelector((store) => store.basketModal);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {thereIsModalBasketOpen && <ModalBasket />}
      <Header allItemsCount={allItemsCount} />
      <Main beersList={beersList} />
    </div>
  );
}

export default App;
