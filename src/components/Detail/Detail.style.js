import styled from "styled-components";

const CardDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: tomato;
  width: 80%;
  padding: 2rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  margin: 0.5rem;
  color: #bbc3cf;
`;
const CardSmall = styled.div`
  flex: 0 0 100px;
  padding: 1rem;
  background: hsla(0, 0%, 83%, 1);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 4px 10px white;
  margin: 0.2rem;
  color: rgba(168, 44, 210, 0.56);
`;

export {CardDetail, CardSmall};
