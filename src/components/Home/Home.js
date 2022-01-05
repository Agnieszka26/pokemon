import React, {useState} from "react";
import CardList from "../CardList.js/CardList";

const Home = () => {
  const [number, setNumber] = useState(1);
  let [pokemons, setPokemons] = useState({});
  const [czyMamy, setCzyMamy] = useState(false);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  async function getPokemons() {
    const response = await fetch(url);
    const data = await response.json();
    setPokemons(data.results);
  }

  const handleSubmit = () => {
    // console.log(number);
    getPokemons();
    setCzyMamy(true);
    // console.log(pokemons);
  };

  return (
    <>
      {!czyMamy && (
        <form>
          <label>
            How many pokemons do you want to see?
            <input
              type="number"
              id="x"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="set numbers of robots"
            />
          </label>
          <input
            type="button"
            onClick={handleSubmit}
            value="Load pokemons!"
          ></input>
        </form>
      )}

      {czyMamy && (number !== 1) ? (
        <CardList data={pokemons} />
      ) : (
        <div>loading </div>
      )}
    </>
  );
};

export default Home;
