import React, {useEffect, useContext} from "react";
import {Card} from "../Card/Card";
import {CardListBody} from "./CardList.styles";
import {Loader} from "../Loader/Loader";
import {SearchBar} from "./SearchBar/SearchBar";
import {ContextList} from "../Context/ContextProvider";
import {maxNuberOfPokemonsToFetch} from "../../Assets/constants";

const CardList = () => {
  const context = useContext(ContextList);

  useEffect(() => {
    getSinglePokemonData(); //nazwa "get"
  }, [context.pokemonsData]);

  useEffect(() => {
    const results = context.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(context.searchTerm.toLowerCase())
    );
    context.setFilteredPokemon(results);
  }, [context.searchTerm]);

  const getSinglePokemonData = () => {
    //dodanie zabezpieczenia przed renderowaniem gdy sie cofnie co strony z pokemonam
    if (context.pokemons.length === 0) {
      if (context.pokemonsData) {
        context.pokemonsData.forEach(async (pokemon) => {
          try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            context.setPokemons((objOfPokemons) => [...objOfPokemons, data]);
          } catch (error) {
            console.log(error);
          }
        });
      }
    } else {
      console.log(context.pokemon);
    }
  };

  const handleChangeSearch = (event) => {
    if (event.target.value === "") {
      context.setSearchTerm(event.target.value);
      console.log(`nie szukam `);
    } else {
      context.setSearchTerm(event.target.value);
      context.IsSearching(true);
    }
  };

  return (
    <>
      <div
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {context.isHigherNumber > maxNuberOfPokemonsToFetch && (
          <h1
            style={{color: "#f947e8"}}
          >{`You have entered the number ${context.isHigherNumber}, the maximum number is ${maxNuberOfPokemonsToFetch}, the list of Pokémon ${maxNuberOfPokemonsToFetch} has been downloaded`}</h1>
        )}
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          value={context.searchTerm}
          type="text"
          placeholder="Search"
        />

        {!context.searching ? (
          <CardListBody>
            {context.pokemons
              .sort((a, b) => a.id - b.id)
              .map((detail) => (
                <Card key={detail.id} pokemon={detail} />
              ))}
          </CardListBody>
        ) : (
          <CardListBody>
            {context.filteredPokemon
              .sort((a, b) => a.id - b.id)
              .map((detail) => (
                <Card key={detail.id} pokemon={detail} />
              ))}
          </CardListBody>
        )}
      </div>
      {context.loading && <Loader />}
    </>
  );
};

export {CardList};
