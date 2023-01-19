import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { maxNuberOfPokemonsToFetch } from "../../Assets/constants";
import home from "../../Assets/home.png";
import { Card } from "../Card/Card";
import { ContextList } from "../Context/ContextProvider";
import { MovesButton } from "../Detail/Moves/Moves.styles";
import { Loader } from "../Loader/Loader";
import { CardListBody } from "./CardList.styles";
import { SearchBar } from "./SearchBar/SearchBar";

const CardList = () => {
  const context = useContext(ContextList);
  const navigate = useNavigate();
  context.setNumberOfPokemonsToFetch(null);
  useEffect(() => {
    context.setNumberOfPokemonsToFetch(null);
    getSinglePokemonData();
  }, [context.pokemonsData]);

  useEffect(() => {
    const results = context.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(context.searchTerm.toLowerCase())
    );
    context.setFilteredPokemon(results);
  }, [context.searchTerm]);

  const getSinglePokemonData = () => {
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            widht: "50%",
          }}
        >
          <div
            style={{
              margin: "1.4rem 0",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <MovesButton
              onClick={() => {
                context.setPokemons([]);
                navigate(`/`);
              }}
            >
              <img src={home} width={25} height={25} alt="home" />
            </MovesButton>
          </div>
        </div>
        {context.isHigherNumber > maxNuberOfPokemonsToFetch && (
          <div
            style={{
              color: "#f947e8",
              margin: "2rem",
              backgroundColor: "#dfbdfa",
              border: "1px solid #c584f3",
              borderRadius: "15px",
              justyfyText: "center",
            }}
          >
            <h1>{`You have entered the number ${context.isHigherNumber}, the maximum number is ${maxNuberOfPokemonsToFetch},
           the list of Pokémon ${maxNuberOfPokemonsToFetch} has been downloaded`}</h1>
          </div>
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

export { CardList };
