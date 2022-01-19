import styled from "styled-components";

const CardDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;

  //max-width: 100%;
  padding: 2rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  margin: 0.5rem auto;
  color: #bbc3cf;
`;
const CardSmall = styled.div`
  justify-content: center;
  // justify-items: center;
  flex-grow: 1;
  width: 22%;
  padding: 1rem;
  background: hsla(0, 0%, 83%, 1);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 4px 10px white;
  margin: 0.2rem;
  color: rgba(168, 44, 210, 0.56);
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallText = styled.p`
  text-align: center;
  color: #271c2b;
  font-size: 9px;
  margin-top: 0;
  padding-top: 0;
`;

const Bigtext = styled.h3`
  text-align: center;
  font-size: 17px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const ButtonTooltip = styled.button`
  border-radius: 50%;
  color: #243247;
  width: 20px;
  // text-align: center;
  font-size: 12px;
  margin: 5px;
  padding: 0;
  border: 2px solid #243247;
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
};
