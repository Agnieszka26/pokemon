import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import {CardListBody} from "./CardList.styles";

const CardList = (props) => {
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const {pokemonData} = props;
  //czy trzeba asynkronicznie ?
  const createPokemonUrl = () => {
    pokemonData.forEach((element) => {
      setPokemonUrl((arrOfUrl) => [...arrOfUrl, element.url]);
    });
  };

  useEffect(() => {
    createPokemonUrl();
  }, [pokemonData]);

  const getingDataOnePokemon = () => {
    pokemonUrl.forEach(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setPokemons((objOfPokemons) => [...objOfPokemons, data]);
    });
  };

  useEffect(() => {
    getingDataOnePokemon();
  }, [pokemonUrl]);

  return (
    <>
      <CardListBody>
        {pokemons.map((detail, i) => (
          <Card
            url = {pokemonUrl}
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
