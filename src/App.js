import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { useSelector } from "react-redux";
import { useFetchBeers } from "./State/Slices/beerListApi";
import { ModalBasket } from "./Components/ModalBasket/ModalBasket";
import { useDispatch } from "react-redux";
import { useFetchBeersScroll } from "./State/Slices/beerListApi";

function App() {
  const { ref } = useFetchBeersScroll();
  const beersList = useSelector((store) => store.beersList);
  const basketList = useSelector((store) => store.basket);
  const allItemsCount = basketList.reduce((acc, val) => {
    return acc + val.item;
  }, 0);
  const thereIsModalBasketOpen = useSelector((store) => store.basketModal);
  const searchValue = useSelector((store) => store.searchByName);
  const dispatch = useDispatch();
  useFetchBeers(searchValue);
  return (
    <div className="App">
      {thereIsModalBasketOpen && <ModalBasket basketList={basketList} />}
      <Header allItemsCount={allItemsCount} />
      <Main beersList={beersList} />

      <div ref={ref}></div>
    </div>
  );
}

export default App;
