import React from "react";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";


import react, {useEffect} from "react";
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

  //console.log(Object.values(detail.sprites));
  return (
    <>
      <h1>Gallery</h1>
      <div>
        {detail.sprites !== undefined && detail.sprites !== null ? (
          Object.values(detail.sprites)
            .slice(0, 8)
            .map((item) => {
              return <img key={uuidv4()} src={item} />;
            })
            
        ) : (
          <div> prosze czekac </div>
        )}
      
      
      </div>
      {/* {detail.sprites !== undefined && detail.sprites !== null &&
      Object.keys(detail.sprites).slice(0, 8).map((item) => {
              return <p key={uuidv4()} >{item} </p>;
            })} */}
    </>
  );
};

export default Gallery;
