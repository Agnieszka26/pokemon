import React, {useState, useEffect, useContext, createContext} from "react";
import {HomeStyle, Input, InputNumber} from "../Home/Home.style";
import {useNavigate} from "react-router-dom";
import {HomeContextProvider, HomeContext} from "../Context/HomeContextProvider";
//import GlobalDataPokemonContextProvider from "../Context/ContextHome";
//import {Children} from "react/cjs/react.production.min";

const Home = () => {
  const context = useContext(HomeContext);
  console.log(context);
  // const {
  //   numberOfPokemonsToFetch,
  //   setNumberOfPokemonsToFetch,
  //   pokemonsData,
  //   setPokemonsData,
  // } = context;

  const [validationFailed, setValidationFailed] = useState("");

  const [loading, setLoading] = useState(false);
  // const [pokemonData, setPokemonData] = useContext(
  //   GlobalDataPokemonContextProvider
  // );
  //const [pokemonsData, setPokemonsData] = useState([]);
  //const HomeContextProvider = createContext(pokemonsData);

  const validationStyles = {
    validationText: {
      padding: 0,
    },
  };

  // useEffect(() => {
  //   getAllPokemons();
  // }, []);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (context.numberOfPokemonsToFetch <= 0) {
      setValidationFailed(true);
    } else if (context.numberOfPokemonsToFetch > 1118) {
      context.setNumberOfPokemonsToFetch(1118);
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

  //console.log(context.pokemonsData);
  //----------------------------------------

  const getAllPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${context.numberOfPokemonsToFetch}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      context.setPokemonsData(data.results);
    } catch (error) {
      console.log("error getting all pokemons data", error);
    } finally {
      setLoading(false);
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
              type="button" //sprawdzic submit
              onClick={handleSubmit}
              value="Load pokemons!"
            ></Input>
          </form>
        </HomeStyle>
      }
      {/* <HomeContextProvider value = {"pokemonsData"} > </HomeContextProvider> */}
    </>
  );
};

export default Home;

// const GlobalDataPokemonContextProvider = (props) => {
//   const [pokemonsData, setPokemonsData] = useState([]);

//   return (
//     <GlobalDataPokemonContext.Provider value={{pokemonsData}}>
//       {props.children}
//     </GlobalDataPokemonContext.Provider>
//   );
// };

// export default GlobalDataPokemonContextProvider;

// const GlobalDataPokemonContextProvider = ({children}) => {
//   const [pokemonsData, setPokemonsData] = useState([]);
//   const GlobalDataPokemonContext = createContext({pokemonsData, setPokemonsData});
//   return (
//     <GlobalDataPokemonContext.Provider value={{pokemonsData, setPokemonsData}}>
//       {children}
//     </GlobalDataPokemonContext.Provider>
//   );
// };

// export {GlobalDataPokemonContextProvider};
