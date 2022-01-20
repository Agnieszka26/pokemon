import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import {CardListBody} from "./CardList.styles";
import {useParams} from "react-router-dom";

const CardList = () => {
  const {number} = useParams();
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState(false);
  // const [thereArePokemons, setThereArePokemons] = useState(false);
  // const [load, setLoad] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;

  const getAllPokemons = async () => {
    //setLoad(true);
    const response = await fetch(url);
    const data = await response.json();
    setPokemonData(data.results);
    //setLoad(false);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

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

  // for(let i = 0; i>=pokemons.length; i++){
  //    const {
  //   id,
  //   // sprites: {front_shiny},
  //   types,
  // } = pokemons;
  // console.log(id)
  // }
  // // const {
  // //   id,
  // //   sprites: {front_shiny},
  // //   types,
  // // } = detail;

  return (
    <>
      <CardListBody>
        {pokemons.length &&
          pokemons
            .sort((a, b) => a.id - b.id)
            .map((detail) => (
              <Card
                url={pokemonUrl}
                id={detail.id}
                pokemonDetails={pokemons}
                image={detail.sprites.front_shiny}
                key={detail.id}
                name={detail.name}
                baseType={detail.types[0].type.name} //wyciągnąć destrukturyzacja
              />
            ))}
      </CardListBody>
    </>
  );
};

export {CardList};
