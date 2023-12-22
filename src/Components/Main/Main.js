import "./Main.css";
import { Card } from "./Card/Card.js";
export const Main = ({ beersList }) => {
  console.log(beersList);
  return (
    <main className="main">
      {beersList.map((beer) => (
        <Card key={beer.id} descriptors={beer} />
      ))}
    </main>
  );
};
