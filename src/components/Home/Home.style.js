import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 1rem;
  margin: 0.5rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  line-height: 2rem;
  text-align: center;
  width: 50vw;
`;

const Input = styled.input`
  padding: 1rem;
  margin:0.9rem;
  background: rgb(140, 156, 180);
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: rgb(216, 225, 238);
  transition: background 0.8s;

  &:hover {
    background: #5193f6;
`;

const InputNumber = styled.input`
  padding: 1rem;
  margin: 0.2rem;
  margin-bottom: 0;


  font-size: 0.7rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background:: ${({bgError}) => (bgError ? "red" : "white")};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:active,
  &:focus {
    outline: 2px solid #5193f6;

    ::-webkit-input-placeholder {
      color: #24324700;
    }
  }
  &:hover {
    cursor: pointer;
    color: #5193f6;
  }
`;
export {HomeStyle, Input, InputNumber};
// trzeba jakoś przez propsy ustawić validację && a double ampersand refers to an
// instance of the component; this is useful if you're doing conditional styling 
//overrides and don't want a style to apply to all instances of a particular component: