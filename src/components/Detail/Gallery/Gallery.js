import React from "react";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

import {CardGallery, Title, ContainerGallery } from "./Gallery.styles"

import {useEffect} from "react";
import {useState} from "react";

const Gallery = () => {
  const [detail, setDetail] = useState({});
  const {userId} = useParams();
  let url = `https://pokeapi.co/api/v2/pokemon/${userId}`;

  useEffect(async () => {
    await getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await setDetail(data);
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
              if (item!==null){
                return <CardGallery key={uuidv4()}>
                <img  src={item} />
              </CardGallery>
              ;
              }
              
            })
            
        ) : (
          <div> prosze czekac </div>
        )}
      
      
      
      {/* {detail.sprites !== undefined && detail.sprites !== null &&
      Object.keys(detail.sprites).slice(0, 8).map((item) => {
              return <p key={uuidv4()} >{item} </p>;
            })} */}
      </ContainerGallery>
    </>
  );
};

export default Gallery;
