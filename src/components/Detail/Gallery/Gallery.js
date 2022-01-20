import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {CardGallery, Title, ContainerGallery} from "./Gallery.styles";

const Gallery = () => {
  const [detail, setDetail] = useState({});
  const {userId} = useParams();
  let url = `https://pokeapi.co/api/v2/pokemon/${userId}`;

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>Gallery</Title>
      <ContainerGallery>
        {detail.sprites !== undefined && detail.sprites !== null ? (
          Object.values(detail.sprites)
            .slice(0, 8)
            .map((item) => {
              if (item !== null) {
                return (
                  <CardGallery key={item}>
                    <img src={item} />
                  </CardGallery>
                );
              }
            })
        ) : (
          <div> Wait a second, please... </div>
        )}
      </ContainerGallery>
    </>
  );
};

export default Gallery;
