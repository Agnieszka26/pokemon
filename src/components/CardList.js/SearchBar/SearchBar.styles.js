import styled from "styled-components";

const SearchBox = styled.input`
  width: 50%;
  padding: 1rem;
  margin-top: 1rem;
  margin-right: 20%;
  margin-left: 20%;
  margin-bottom: 0;
  font-size: 0.7rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: white;

  &:active,
  &:focus {
    outline: 2px solid #5193f6;
    background: #bbc3cf;
  }
  &:hover {
    cursor: pointer;
    color: #5193f6;
  }
`;

export { SearchBox };
