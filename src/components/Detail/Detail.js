import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { CardDetail, CardSmall } from "./Detail.style";
import { useEffect } from "react";
import DropdownMenuItems from "./DropDown/DropdownMenuItems";
import DropdownMenuAbility from "../Detail/Abilities/DropdownMenuAbility";
import Moves from "./Moves/Moves";
import Stats from "./Stats/Stats";
import Gallery from "./Gallery/Gallery";

const Detail = () => {
  const { userId } = useParams();
  const [detail, setDetail] = useState({});
  // const [abilities, setAbilities] = useState([]);
  // const [heldItems, setHeldItems] = useState([]);
  // const [image, setImage] = useState(null);
  // const [name, setName] = useState("");
  // const [type, setType] = useState("");
  // const [weight, setWeight] = useState("");
  // const [moves, setMoves] = useState([]);
  // const [stats, setStats] = useState([]);
  // const [images, setImages] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  // useEffect(() => {
  //   if (detail !== undefined) {
  //     setAbilities(detail.abilities);
  //     setHeldItems(detail.held_items);
  //     if (detail.sprites !== undefined) {
  //       setImage(detail.sprites.front_default);
  //     }
  //     if (detail.types !== undefined) {
  //       setType(detail.types[0].type.name);
  //     }
  //     setName(detail.name);
  //     setWeight(detail.weight);
  //     if (detail.moves !== undefined) {
  //       setMoves(detail.moves);
  //     }
  //     if (detail.stats !== undefined) {
  //       setStats(detail.stats);
  //     }
  //     if (detail.sprites !== undefined) {
  //       setImages(detail.sprites);
  //     }
  //   }
  // }, []);
  //<- tutaj ma być pusta array bo inaczej będzie infinite loop, poza funkcjami się dużo razy renderują rzeczy, może wszystko popwkładać do funkcji ?

  let url = `https://pokeapi.co/api/v2/pokemon/${userId}`;

  const getDetail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("detail", detail);

  const { abilities, moves, held_items, stats, sprites, types, name, weight } =
    detail;

  return (
    <>
      {Object.keys(detail).length && (
        <CardDetail>
          <CardSmall>
            <DropdownMenuAbility abilities={abilities} />
          </CardSmall>
          <CardSmall>
            <img src={sprites.front_default} alt="front_photo" />
            <p>name: </p>
            <p>{name}</p>
            <p>type:</p>
            <p>{types[0].type.name}</p>
            <p>weight</p>
            <p>{weight}</p>
          </CardSmall>

          <CardSmall>
            <DropdownMenuItems heldItems={held_items} />
          </CardSmall>
          <CardSmall>
            <Moves moves={moves} />
          </CardSmall>
          <CardSmall>
            <Stats stats={stats} />
          </CardSmall>
          <CardSmall>
            <button> Gallery </button>
            {/* <Gallery images={images} /> */}
          </CardSmall>
        </CardDetail>
      )}
    </>
  );
};

export default Detail;
