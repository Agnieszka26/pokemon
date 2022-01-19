import styled from "styled-components";

const ContainerGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.1rem 6rem;
  padding: 2rem;
  background: linear-gradient(
    180.2deg,
    #5193f6 -8.53%,
    rgba(249, 71, 232, 0.57) 109.43%
  );
  border-radius: 20px;
  box-shadow: 4px 7px 19px rgba(168, 44, 210, 0.56);

`;

const CardGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .4rem;
  margin: 0.8rem;
  background: white;
  border: 2px solid #5193f6;
  border-radius: 30px;
  box-shadow: 4px 7px 19px rgba(0, 0, 0, 0.56);
  transition: scale 0.3s, transform .3s;

  &:hover{
    transform: scale(1.05);
`;

const Title = styled.h1`
  color: #f947e891;
  justyfy-content: center;
  text-align: center;
  -webkit-text-stroke: 1px #f947e8;
  text-shadow: 2px 1px 30px #5193f6;
  letter-spacing: 8px;
  font-size: 40px;
`;

export {CardGallery, Title, ContainerGallery};
