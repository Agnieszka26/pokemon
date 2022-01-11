import styled from "styled-components";

const HomeStyle = styled.div`
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 2rem;
  text-align: center;
  width: 50vw;
`;

const Input = styled.input`
  background: rgb(140, 156, 180);
  padding: 1rem;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: rgb(216, 225, 238);
`;

const InputNumber = styled.input`
  background: rgb(216, 225, 238);
  padding: 1rem;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 0.2rem;
  color: rgb(140, 156, 180);
`;
export {HomeStyle, Input, InputNumber};
