import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react/cjs/react.development";
import Detail from "../Detail/Detail";
import {TypeTitle, NameTitle, ImagePokemon, CardPokemon} from "./Card.styles";

const Card = (props) => {
  // console.log("ile razy");
  let navigate = useNavigate();
  const [details, setDetails] = useState(null);

  function handleClick() {
    navigate(
      `Detail/${props.id}`
      // {
      //   name: props.name,
      //   id: props.id,
      // },
      // console.log({name: props.name, id: props.id})
    );
  }

  //   <Link
  //   to={`/pokemondetails/${props.id}`}
  //   style={{textDecoration: "none"}}
  //   details={props}
  // ></Link>

  //onPress={() => {
  //   /* 1. Navigate to the Details route with params */
  //   navigation.navigate('Details', {
  //     itemId: 86,
  //     otherParam: 'anything you want here',
  //   });
  // }}

  return (
    <CardPokemon onClick={() => handleClick()}>
      <ImagePokemon>
        <img src={props.image} alt="img" />
      </ImagePokemon>
      <NameTitle> name: {props.name}</NameTitle>
      <TypeTitle> type:{props.baseType} </TypeTitle>

      <Detail details={props} />
    </CardPokemon>
  );
};

export default Card;
// przez zdarzenie on klik zmienić directory, useHistory, match
