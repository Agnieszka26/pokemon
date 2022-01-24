import styled from "styled-components";

const CardDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin: 0.5rem auto;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  color: #bbc3cf;
`;

const CardSmall = styled.div`
  flex-grow: 1;
  justify-content: center;
  width: 22%;
  padding: 1rem;
  margin: 0.2rem;
  background: hsla(0, 0%, 83%, 1);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 4px 10px white;
  color: rgba(168, 44, 210, 0.56);
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallText = styled.p`
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  color: #271c2b;
  font-size: 9px;
`;

const Bigtext = styled.h3`
  margin-bottom: 0;
  padding-bottom: 0;
  text-align: center;
  font-size: 17px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const ButtonTooltip = styled.button`
  width: 20px;
  margin: 5px;
  padding: 0;
  border: 2px solid #243247;
  border-radius: 50%;
  color: #243247;
  font-size: 12px;
  z-index: -1;

  &:hover {
    color: white;
    background-color: #243247;
  }
`;

export {
  ButtonTooltip,
  CardDetail,
  CardSmall,
  SmallText,
  Bigtext,
  ImageContainer,
  Flex,
};
