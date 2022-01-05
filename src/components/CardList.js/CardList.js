import React from "react";
import Card from "../Card/Card";

const CardList = (pokemons) => {
  return (
    <div>
      <Card objOfPokemon={pokemons.data} />
      dziala
      
      {/* {pokemons.map((pokemon, i) => {
        return (
          <Card key={pokemon[i].id} id={pokemon[i].id} name={pokemon[i].name} />
        );
      })} */}
    </div>
  );
};

export default CardList;
