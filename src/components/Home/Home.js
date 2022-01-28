import React, {useState, useContext} from "react";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import {useNavigate} from "react-router-dom";
//import {HomeContext} from "../Context/HomeContextProvider";
import {ContextList} from "../Context/ContextProvider";
import { maxNuberOfPokemonsToFetch } from "../../Assets/constants";

const Home = () => {
  // const context = useContext(HomeContext);
  const context = useContext(ContextList);

  const [validationFailed, setValidationFailed] = useState("");

  const validationStyles = {
    validationText: {
      padding: 0,
    },
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (context.numberOfPokemonsToFetch <= 0) {
      setValidationFailed(true);
    } else if (context.numberOfPokemonsToFetch > maxNuberOfPokemonsToFetch) {
      context.setIsHigherNumber(context.numberOfPokemonsToFetch);
      context.setNumberOfPokemonsToFetch(maxNuberOfPokemonsToFetch);
      getAllPokemons();
      navigate(`/${context.numberOfPokemonsToFetch}/Pokemonlist`);
    } else {
      getAllPokemons();
      navigate(`/${context.numberOfPokemonsToFetch}/Pokemonlist`);
    }
  };

  const handleEnterPress = (e) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    context.setNumberOfPokemonsToFetch(e.target.value);
    validationFailed && setValidationFailed(false);
  };

  const getAllPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${context.numberOfPokemonsToFetch}`;
    context.setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      context.setPokemonsData(data.results);
    } catch (error) {
      console.log("error getting all pokemons data", error);
    } finally {
      context.setLoading(false);
    }
  };


  return (
    <>
      {
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                validationFailed={validationFailed}
                type="number"
                placeholder="set numbers of pokemons"
                value={undefined}
                onChange={handleChange}
                onKeyPress={handleEnterPress}
              />
            </label>
            {validationFailed && (
              <div style={validationStyles.validationText}>
                the number must be higher than 0
              </div>
            )}
            <Input
              type="button"
              onClick={handleSubmit}
              value="Load pokemons!"
            ></Input>
          </form>
        </HomeStyle>
      }
    </>
  );
};

export default Home;
