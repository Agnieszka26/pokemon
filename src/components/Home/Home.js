import React, { useState, useContext, useEffect } from "react";
import { HomeStyle, Input, InputNumber, FormContainer } from "./Home.style";
import { useNavigate } from "react-router-dom";
import { ContextList } from "../Context/ContextProvider";
import { maxNuberOfPokemonsToFetch } from "../../Assets/constants";

const Home = () => {
  const context = useContext(ContextList);
  context.setPokemonsData(null);
  context.setIsHigherNumber(0);
  // useEffect(() => {
  //   context.setNumberOfPokemonsToFetch(null);
  // }, [context.numberOfPokemonsToFetch]);

  console.log(context.pokemonsData);
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
    // context.setPokemons(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      context.setPokemonsData(data.results);
      context.setNumberOfPokemonsToFetch(null);
    } catch (error) {
      console.log("error getting all pokemons data", error);
    } finally {
      context.setLoading(false);
    }
    context.setNumberOfPokemonsToFetch(null);
  };

  return (
    <main style={{ height: "100%" }}>
      {
        <HomeStyle>
          <FormContainer>
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
          </FormContainer>
        </HomeStyle>
      }
    </main>
  );
};

export default Home;
