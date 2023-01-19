import React from "react";
import { useContext } from "react";
import { ContextList } from "../Context/ContextProvider";

import home from "../../../src/Assets/home.png";

import {
  CardDetail,
  CardSmall,
  SmallText,
  Bigtext,
  ImageContainer,
  Flex,
  ButtonTooltip,
} from "./Detail.style";

import DropdownMenuItems from "./HeldItems/DropdownMenuItems";
import DropdownMenuAbility from "../Detail/Abilities/DropdownMenuAbility";
import Moves from "./Moves/Moves";
import Stats from "./Stats/Stats";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-simple-tooltip";
import { MovesButton } from "../Detail/Moves/Moves.styles";

const Detail = () => {
  const context = useContext(ContextList);

  context.pokemons.forEach((el) => {
    if (context.id === el.id) {
      context.setPokemon(el);
    }
  });

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Pokemonlist/Detail/Gallery`);
  };

  return (
    context.pokemon && (
      <>
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
        <CardDetail>
          <CardSmall>
            <DropdownMenuAbility />
          </CardSmall>

          <CardSmall>
            <ImageContainer>
              <img
                src={context.pokemon.sprites.front_default}
                alt="front_default"
              />
            </ImageContainer>
            <Bigtext>{context.pokemon.name}</Bigtext>
            <SmallText>name </SmallText>
            <Bigtext>{context.pokemon.types[0].type.name}</Bigtext>
            <SmallText>type</SmallText>
            <Bigtext>{context.pokemon.weight}</Bigtext>
            <SmallText>weight</SmallText>
          </CardSmall>
          <CardSmall>
            <DropdownMenuItems />
          </CardSmall>
          <CardSmall>
            <Flex>
              <Moves />
              <Tooltip
                background={"#243247"}
                radius={10}
                arrow={8}
                placement={"top"}
                content="Moves which pokemon can make"
              >
                <ButtonTooltip>?</ButtonTooltip>
              </Tooltip>
            </Flex>
          </CardSmall>

          <CardSmall>
            <Flex
              style={{
                margin: "0 0 1rem 0",
                padding: "0",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ margin: "0", padding: "0" }}>Statistics</h4>
              <Tooltip
                background={"#243247"}
                radius={10}
                arrow={8}
                placement={"top"}
                content="Basic and important statistic of pokemon"
              >
                <ButtonTooltip>?</ButtonTooltip>
              </Tooltip>
            </Flex>

            <Stats style={{ display: "flex" }} />
          </CardSmall>
          <CardSmall>
            <Flex>
              <MovesButton onClick={handleClick}> Gallery </MovesButton>
              <Tooltip
                background={"#243247"}
                radius={10}
                arrow={8}
                placement={"top"}
                content="Pictures of pokemons"
              >
                <ButtonTooltip>?</ButtonTooltip>
              </Tooltip>
            </Flex>
          </CardSmall>
        </CardDetail>
      </>
    )
  );
};

export default Detail;
