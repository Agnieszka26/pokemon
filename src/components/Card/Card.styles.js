import styled from "styled-components";

const CardPokemon = styled.div`
  height: 50%;
  padding: 1.2rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  margin: 0.8rem;
  transition: scale 0.3s, transform .3s;

  &:hover{
    cursor: pointer;
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
  margin-bottom: 0;
  font-size: 1.1rem;
`;

const TypeTitle = styled.h3`
  margin-bottom: 0;
  color: hsla(0, 0%, 83%, 1);
  font-size: 0.9rem;
`;

const PokemonButton = styled.button`
  background: hsla(0, 0%, 2%, 1);
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const Tables = styled.p`
  margin: 0;
  color: black;
  font-size: 0.6rem;
`;

export {
  TypeTitle,
  PokemonButton,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
};
