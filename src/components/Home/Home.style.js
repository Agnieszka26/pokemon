import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50vw;
  heigh: 25vh;
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
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  background:: ${({ bgError }) => (bgError ? "red" : "white")};
  ${({ validationFailed }) =>
    validationFailed &&
    `outline: 2px solid red;
  background-color: #ff206391;
`}
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
export { HomeStyle, Input, InputNumber, FormContainer };
