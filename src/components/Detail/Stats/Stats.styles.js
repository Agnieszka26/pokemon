import styled from "styled-components";

const CardStats = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;
const StatsTile = styled.div`
  border-radius: 3px;
  margin: 1px;
  padding: 0.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  flex-basis: 100px;
  flex: 1;
`;

export {CardStats, StatsTile};
