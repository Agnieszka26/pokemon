import React, { useContext } from "react";

import { ContextList } from "../../Context/ContextProvider";
import { CardGallery, ContainerGallery, List, Title } from "./Gallery.styles";

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
                      style={{ margin: "0 3rem" }}
                      src={value}
                      alt="pokemon"
                    />
                    <List>{key.split("_").join(" ")}</List>
                  </CardGallery>
                );
              }
              return null;
            })}
      </ContainerGallery>
    </>
  );
};

export default Gallery;
