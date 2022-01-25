import {createContext, useState} from "react";

export const ContextCardList = createContext();

export const ContextCardListProvider = ({children}) => {
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [searching, IsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  return (
    <ContextCardList.Provider
      value={{
        pokemonUrl,
        setPokemonUrl,
        searching,
        IsSearching,
        searchTerm,
        setSearchTerm,
        filteredPokemon,
        setFilteredPokemon,
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </ContextCardList.Provider>
  );
};
