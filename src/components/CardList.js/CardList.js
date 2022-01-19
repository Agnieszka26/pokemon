import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import {CardListBody} from "./CardList.styles";

const CardList = ({pokemonData}) => {
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    createPokemonUrl();
  }, [pokemonData]);

  useEffect(() => {
    getingDataOnePokemon();
  }, [pokemonUrl]);

  const createPokemonUrl = () => {
    pokemonData.forEach((element) => {
      setPokemonUrl((arrOfUrl) => [...arrOfUrl, element.url]);
    });
  };

  const getingDataOnePokemon = () => {
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

  return (
    <>
      <CardListBody>
        {pokemons.map((detail) => (
          <Card
            url={pokemonUrl}
            id={detail.id}
            pokemonDetails={pokemons}
            image={detail.sprites.front_shiny}
            key={detail.id}
            name={detail.name}
            baseType={detail.types[0].type.name}
          />
        ))}
      </CardListBody>
    </>
  );
};

export default CardList;
