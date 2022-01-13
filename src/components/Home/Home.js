import React, {useState} from "react";
import CardList from "../CardList.js/CardList";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import Loading from "../Loading/Loading";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [thereArePokemons, setThereArePokemons] = useState(false);
  const [load, setLoad] = useState(false);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  async function getAllPokemons() {
    setLoad(true);
    const response = await fetch(url);
    const data = await response.json();
    setPokemons(data.results);
    setLoad(false);
  }

  const handleSubmit = () => {
    getAllPokemons();
    setThereArePokemons(true);
  };

  return (
    <>
      {!thereArePokemons && (
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                type="number"
                placeholder="set numbers of pokemons"
                value={null}
                onChange={(e) => setNumber(e.target.value)}
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
      {thereArePokemons && <CardList pokemonData={pokemons} />}
      {load && <Loading />}
    </>
  );
};

export default Home;
