import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { useSelector } from "react-redux";
import { useFetchBeers } from "./State/Slices/beerListApi";
import { ModalBasket } from "./Components/ModalBasket/ModalBasket";
import { useDispatch } from "react-redux";
import { useFetchBeersScroll } from "./State/Slices/beerListApi";
import { CSSTransition } from "react-transition-group";
import { ModalSingleBeer } from "./Components/ModalSingleBeer/ModalSingleBeer";

function App() {
  const { ref } = useFetchBeersScroll();
  const beersList = useSelector((store) => store.beersList);
  const basketList = useSelector((store) => store.basket);
  const allItemsCount = basketList.reduce((acc, val) => {
    return acc + val.item;
  }, 0);
  const thereIsModalBasketOpen = useSelector((store) => store.basketModal);
  const searchValue = useSelector((store) => store.searchByName);
  const thereIsModalSingleBeer = useSelector((store) => store.singleBeerModal);
  const dispatch = useDispatch();
  useFetchBeers(searchValue);

  return (
    <div className="App">
      <CSSTransition
        in={thereIsModalBasketOpen}
        timeout={1500} // Duration of the animation
        classNames={{
          enter: "modal-enter",
          enterActive: "modal-enter-active",
          exit: "modal-exit",
          exitActive: "modal-exit-active",
        }}
        unmountOnExit
      >
        <ModalBasket basketList={basketList} />
      </CSSTransition>

      <CSSTransition
        in={thereIsModalSingleBeer}
        timeout={1500} // Duration of the animation
        classNames={{
          enter: "modal-enter-single-beer",
          enterActive: "modal-enter-active-single-beer",
          exit: "modal-exit-single-beer",
          exitActive: "modal-exit-active-single-beer",
        }}
        unmountOnExit
      >
        <ModalSingleBeer />
      </CSSTransition>

      <Header allItemsCount={allItemsCount} />
      <Main beersList={beersList} />

      <div ref={ref}></div>
    </div>
  );
}

export default App;
