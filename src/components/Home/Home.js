import React, {useState} from "react";
import CardList from "../CardList.js/CardList";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import Loader from "../Loader/Loader";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  //try catch
  async function getAllPokemons() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    getAllPokemons();
  };

  return (
    <>
      {pokemons.length === 0 && (
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                type="number"
                placeholder="set numbers of pokemons"
                value={undefined}
                onChange={(e) => setNumber(e.target.value)}
                // wyrzucić tę funkcję
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
      {pokemons.length !== 0 && <CardList pokemonData={pokemons} />}

      {loading && <Loader />}
    </>
  );
};

export default Home;
