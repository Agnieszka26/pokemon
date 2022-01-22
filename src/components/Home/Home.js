import React, { useState } from "react";
import { HomeStyle, Input, InputNumber } from "./Home.style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [validationWarning, setValidateWarning] = useState("");
  // const [validationStyle, setValidationStyle] = useState({ outline: `none` });
  const [validationFailed, setValidationFailed] = useState(false);
  const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);

  const validationStyles = {
    validationText: {
      color: "red",
      fontSize: "10px",
      margin: 0,
      padding: 0,
    },
  };

  const navigate = useNavigate();
  // what is the point in declaring this variable as let? do you predict to change it in the future?
  // popular convention with using hooks is declaring variables as constants
  // so when you are not sure what to use, use const first :)
  const handleSubmit = () => {
    if (numberOfPokemonsToFetch <= 0) {
      // should be less or equal 0, because warning should appear also when user types 0
      setValidationFailed(true);
      // setValidateWarning("the numberOfPokemonsToFetch must be higher than 0");
      // setValidationStyle({
      //   outline: `2px solid red`,
      //   backgroundColor: "#ff206391",
      // });
    } else if (numberOfPokemonsToFetch > 1118) {
      setNumberOfPokemonsToFetch(1118);
      navigateToPokemonListPage();
    } else {
      navigateToPokemonListPage();
    }
  };

  const handleEnterPress = (e) => {
    // more descriptive function name
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setNumberOfPokemonsToFetch(e.target.value);
    validationFailed && setValidationFailed(false);
    // setValidateWarning("");
    // setValidationStyle({ outline: `none` });
  };

  const navigateToPokemonListPage = () => {
    validationFailed && setValidationFailed(false);
    navigate(`/${numberOfPokemonsToFetch}/Pokemonlist`);
  };

  return (
    <>
      {
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                // you are using styled components so you can pass prop validationFailed to InputNumber,
                // and conditionally add necessary styling in InputNumber component itself
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
              type="button" //sprawdzic submit
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
