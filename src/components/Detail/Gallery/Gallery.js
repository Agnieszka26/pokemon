import react, {useEffect} from "react";
import {useState} from "react";

const Gallery = ({images}) => {
  const [pictures, setPictures] = useState(null);

  useEffect(() => {
    if (images !== null) {
      setPictures(images);
    }
  });

  return (
    <>
      {pictures !== null && (
        <div>
          <img src={pictures.back_default} />
          <img src={pictures.back_shiny} />
          <img src={pictures.front_default} />
          <img src={pictures.front_shiny} />
        </div>
      )}
    </>
  );
};

export default Gallery;
