import React, {useState} from "react";
import CardList from "../CardList.js/CardList";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import Loading from "../Loading/Loading";

const Home = () => {
  const [validationWarning, setValidateWarning] = useState("");
  const [validationStyle, setValidationStyle] = useState({outline: `none`});
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

  const validationStyles = {
    validationText: {
      color: "red",
      fontSize: "10px",
      margin: 0,
      padding: 0,
    },
  };

  const handleSubmit = () => {
    if (number < 0) {
      setValidateWarning("the number must be higher than 0");
      setValidationStyle({outline: `5px solid red`});
    } else {
      getAllPokemons();
      setThereArePokemons(true);
    }
  };

  return (
    <>
      {!thereArePokemons && (
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                style={validationStyle}
                type="number"
                placeholder="set numbers of pokemons"
                value={undefined}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <div style={validationStyles.validationText}>
              {validationWarning}
            </div>
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
