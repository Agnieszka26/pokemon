import styled from "styled-components";

const ContainerGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  //   border: 2px solid white;
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);
  margin: 0.6rem;
  padding: 1rem;
`;
const CardGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  background: white;
  border: 2px solid #5193f6;
  border-radius: 30px;
  box-shadow: 4px 7px 19px rgba(0, 0, 0, 0.56);
  margin: 0.5rem auto;
`;
const Title = styled.h1`
  color: #f947e891;
  justyfy-content: center;
  text-align: center;
  -webkit-text-stroke: 1px #f947e8;
  text-shadow: 2px 1px 30px #5193f6;
  letter-spacing: 8px;
  font-size:40px;
`;
export {CardGallery, Title, ContainerGallery};
