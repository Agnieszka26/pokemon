import styled from "styled-components";
import styledComponents from "styled-components";

const CardPokemon = styled.div`
  width: 20%;
  padding: 1rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  margin: 0.5rem;
  transition: scale 0.3s, transform .3s;

  &:hover{
    transform: scale(1.1);
`;

const ImagePokemon = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  background: #bbc3cf;
`;

const NameTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const TypeTitle = styled.h3`
  color: hsla(0, 0%, 83%, 1);
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const PokemonButton = styled.button`
  background: hsla(0, 0%, 2%, 1);
  padding: 0.7rem 2.5rem;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 0.2rem;
`;

export {TypeTitle, PokemonButton, NameTitle, ImagePokemon, CardPokemon};
