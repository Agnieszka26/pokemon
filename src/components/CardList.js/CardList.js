import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { CardListBody } from "./CardList.styles";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";

const CardList = () => {
  const { number } = useParams();
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, IsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const results = pokemons.filter(
      (pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      //pokemon.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPokemon(results);
    console.log(results);
  }, [searchTerm]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    createPokemonUrl();
  }, [pokemonData]);

  useEffect(() => {
    getSinglePokemonData();
  }, [pokemonUrl]);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  const getAllPokemons = async () => {
    // added try catch and renamed load to loading, to be more descriptive
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.log("error getting all pokemons data", error);
    } finally {
      setLoading(false);
    }
  };

  const createPokemonUrl = () => {
    pokemonData.forEach((element) => {
      setPokemonUrl((arrOfUrl) => [...arrOfUrl, element.url]);
    });
  };

  const getSinglePokemonData = () => {
    // more descriptive name of that function :)
    pokemonUrl.forEach(async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemons((objOfPokemons) => [...objOfPokemons, data]);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleChangeSearch = (event) => {
    if (event.target.value === "") {
      setSearchTerm(event.target.value);
      console.log(`nie szukam `);
      //  IsSearching(false);
    } else {
      //setSearchTerm(event.target.value);
      setSearchTerm(event.target.value);
      // console.log(`szukam ${searchTerm}`);

      IsSearching(true);
    }
  };

  // console.log(`${filteredPokemon}`);
  return (
    <>
      <div
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {number > 1118 && (
          <h1
            style={{ color: "#f947e8" }}
          >{`You have entered the number ${number}, the maximum number is 1118, the list of Pokémon 1118 has been downloaded`}</h1>
        )}
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />

        {!searching && (
          <CardListBody>
            {pokemons
              .sort((a, b) => a.id - b.id)
              .map((detail) => (
                <Card pokemon={detail} />
              ))}
          </CardListBody>
        )}
        {searching && (
          <CardListBody>
            {filteredPokemon
              .sort((a, b) => a.id - b.id)
              .map((detail) => (
                <Card pokemon={detail} />
              ))}
          </CardListBody>
        )}

        {/* {filteredPokemon.length ? (
        <CardListBody>
          {filteredPokemon
            .sort((a, b) => a.id - b.id)
            .map((detail) => (
              <Card pokemon={detail} />
            ))}
        </CardListBody>
      ) : (
        <div> no no no </div>
      )} */}
      </div>
      {loading && <Loader />}
    </>
  );
};

export { CardList };
