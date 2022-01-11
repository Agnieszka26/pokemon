import React, {useState} from "react";
import CardList from "../CardList.js/CardList";
import {HomeStyle, Input, InputNumber} from "./Home.style";

const Home = () => {
  const [number, setNumber] = useState(0);
  let [pokemons, setPokemons] = useState([]);
  const [thereArePokemons, setThereArePokemons] = useState(false);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  async function getAllPokemons() {
    const response = await fetch(url);
    const data = await response.json();
    setPokemons(data.results);
  }

  const handleSubmit = () => {
    getAllPokemons();
    setThereArePokemons(true);
  };

  return (
    <>
      {/* jeden wielki if ????? żeby to się ładowało kiedy trzeba  nie! promises and pending*/}
      {!thereArePokemons && (
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                type="number"
                id="x"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="set numbers of robots"
              />
            </label>
            <Input
              type="button"
              onClick={handleSubmit}
              value="Load pokemons!"
            ></Input>
          </form>
        </HomeStyle>
      )}

      {thereArePokemons || number !== 0 ? (
        <CardList pokemonData={pokemons} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Home;
