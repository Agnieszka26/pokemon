import {createContext, useState} from "react";

export const HomeContext = createContext();

export const HomeContextProvider = ({children}) => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);

  return (
    <HomeContext.Provider
      value={{
        pokemonsData,
        setPokemonsData,
        numberOfPokemonsToFetch,
        setNumberOfPokemonsToFetch,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
