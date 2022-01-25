import React, {useState, useEffect, useContext} from "react";
import {Card} from "../Card/Card";
import {CardListBody} from "./CardList.styles";
import {useParams} from "react-router-dom";
import {Loader} from "../Loader/Loader";
import {SearchBar} from "./SearchBar/SearchBar";
import {CardProvider, CardContext} from "../Card/CardContextProvider";
import {
  ContextCardList,
  ContextCardListProvider,
} from "./ContextCardListProvider";
import {HomeContext, HomeContextProvider} from "../Context/HomeContextProvider";

const CardList = () => {
  const context = useContext(ContextCardList);
  const contextHome = useContext(HomeContext);
  const contextCard = useContext(CardContext);
  // console.log(context);
  // console.log(contextHome.pokemonsData);

  useEffect(() => {
    const results = context.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(context.searchTerm.toLowerCase())
    );
    context.setFilteredPokemon(results);
  }, [context.searchTerm]);

  useEffect(() => {
    getingSinglePokemonData();
  }, [contextHome.pokemonsData]);

  //------------------------------
  const getingSinglePokemonData = () => {
    if (contextHome.pokemonsData) {
      //console.log(contextHome.pokemonsData.url);
      contextHome.pokemonsData.forEach(async (pokemon) => {
        try {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          context.setPokemons((objOfPokemons) => [...objOfPokemons, data]);
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  //----------------------------------
  //setting Detail of pokemon

  const settingDetailsPokemon = (de) => {
    context.pokemons
      .sort((a, b) => a.id - b.id)
      .map((detail) =>
        //     //<Card  key = {detail.id} />
        contextCard.setDetail(detail)
        //     // <Card  key = {detail.id}  pokemon = {detail}/>
      );
  };
  // (context.pokemons)? context.pokemons
  //   .sort((a, b) => a.id - b.id)
  //   .map((detail) => (
  //     //<Card  key = {detail.id} />
  //     contextCard.setDetail(detail)
  //     // <Card  key = {detail.id}  pokemon = {detail}/>
  //   ))

  //-----------------------------------

  //getingSinglePokemonData();
  const handleChangeSearch = (event) => {
    if (event.target.value === "") {
      context.setSearchTerm(event.target.value);
      console.log(`nie szukam `);
    } else {
      context.setSearchTerm(event.target.value);
      context.IsSearching(true);
    }
  };

  //console.log(context);
  return (
    <>
      <div
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*
        Jestem czołgiem i na razie zmieniam
         {number > 1118 && (
          <h1
            style={{ color: "#f947e8" }}
          >{`You have entered the number ${number}, the maximum number is 1118, the list of Pokémon 1118 has been downloaded`}</h1>
        )} */}
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          value={context.searchTerm}
          type="text"
          placeholder="Search"
        />

        {!context.searching && (
          <CardListBody>
            <Card />
          </CardListBody>
        )}
        {context.searching && (
          <CardListBody>
            {context.filteredPokemon
              .sort((a, b) => a.id - b.id)
              .map((detail) => (
                <Card pokemon={detail} />
              ))}
          </CardListBody>
        )}
      </div>
      {context.loading && <Loader />}
    </>
  );
};

export {CardList};
