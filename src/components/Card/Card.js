import React from "react";

const Card = (props) => {
  //const {pokemons} = props;
  return (
    <div>
      <p>card</p>
      {/* <p> name: {props.objOfPokemon.data[0].name}</p> */}

      {
        // props.objOfPokemon.map((pokemon, i) => {
        //   console.log(pokemon[i]);
        // })
        console.log(props.objOfPokemon)
      }
      {/* {console.log(props.objOfPokemon.data[0])} */}
      {/* <img src={`gjndkgj`} alt="pokemon" />
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div> */}
    </div>
  );
};

export default Card;
