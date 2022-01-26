import {createContext, useState, useEffect} from "react";

export const ContextList = createContext();

export const ContextProvider = ({children}) => {
  // const [pokemonUrl, setPokemonUrl] = useState([]);
  const [searching, IsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);
  const [isHigherNumber, setIsHigherNumber] = useState(0);
  const [titleImagesDetail, setTitleImagesDetail] = useState([]);
  const [imageUrlsDetail, setImageUrlsDetail ] = useState([]);

  const values = {
    // pokemonUrl,
    // setPokemonUrl,
    searching,
    IsSearching,
    searchTerm,
    setSearchTerm,
    filteredPokemon,
    setFilteredPokemon,
    pokemons,
    setPokemons,
    id,
    setId,
    pokemon,
    setPokemon,
    detail,
    setDetail,
    loading,
    setLoading,
    pokemonsData,
    setPokemonsData,
    numberOfPokemonsToFetch,
    setNumberOfPokemonsToFetch,
    isHigherNumber,
    setIsHigherNumber,
    titleImagesDetail,
    setTitleImagesDetail,
    imageUrlsDetail, setImageUrlsDetail
  };

  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};
