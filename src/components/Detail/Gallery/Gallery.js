import React, {useContext, useEffect, useState} from "react";

import {CardGallery, List, Title, ContainerGallery} from "./Gallery.styles";
import {ContextList} from "../../Context/ContextProvider";

const Gallery = () => {
  const context = useContext(ContextList);

  return (
    <>
      <Title>Gallery</Title>
      <ContainerGallery>
        {context.pokemon.sprites &&
          Object.entries(context.pokemon.sprites)
            .slice(0, 8)
            .map(([key, value]) => {
              if (value !== null) {
                return (
                  <CardGallery key={value}>
                    <img
                      height="150"
                      style={{margin: "0 3rem"}}
                      src={value}
                      alt="pokemon"
                    />
                    <List>{key.split("_").join(" ")}</List>
                  </CardGallery>
                );
              }
            })}
      </ContainerGallery>
    </>
  );
};

export default Gallery;
