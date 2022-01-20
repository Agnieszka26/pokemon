import React, {useState} from "react";
import {CardList} from "../CardList.js/CardList";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import Loading from "../Loading/Loading";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const [validationWarning, setValidateWarning] = useState("");
  const [validationStyle, setValidationStyle] = useState({outline: `none`});
  const [number, setNumber] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [thereArePokemons, setThereArePokemons] = useState(false);
  const [load, setLoad] = useState(false);

  // const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  // const getAllPokemons = async () => {
  //   setLoad(true);
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setPokemons(data.results);
  //   setLoad(false);
  // };

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
      setValidationStyle({
        outline: `2px solid red`,
        backgroundColor: "#ff206391",
      });
    } else if (number > 1118) {
      setValidateWarning(
        `You entered number ${number}, the maximum number is 1118, the list of Pokémon 1118 has been downloaded`
      );
      setNumber(1118);
      // getAllPokemons();
      setThereArePokemons(true);
    } else {
      //  getAllPokemons();
      setThereArePokemons(true);
    }
  };

  const handleEnter = (e) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
    setValidateWarning("");
    setValidationStyle({outline: `none`});
  };

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${number}/Pokemonlist`);
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
                onChange={handleChange}
                onKeyPress={handleEnter}
              />
            </label>
            <div style={validationStyles.validationText}>
              {validationWarning}
            </div>
            <Input
              type="button" //sprawdzic submit
              onClick={handleClick}
              value="Load pokemons!"
            ></Input>
          </form>
        </HomeStyle>
      )}
      {/* {thereArePokemons && (
        <div>
          <h6 style={{color: "rgba(249, 71, 232, 0.57)", margin: "2rem"}}>
            {validationWarning}
          </h6>
          <CardList pokemonData={pokemons} />
        </div>
      )} */}
      {load && <Loading />}
    </>
  );
};

export default Home;
