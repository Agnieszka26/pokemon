import React from "react";
import {useParams} from "react-router-dom";
import {useState} from "react/cjs/react.development";
import {
  CardDetail,
  CardSmall,
  SmallText,
  Bigtext,
  ImageContainer,
  ButtonTooltip,
} from "./Detail.style";
import {useEffect} from "react";
import DropdownMenuItems from "./DropDown/DropdownMenuItems";
import DropdownMenuAbility from "../Detail/Abilities/DropdownMenuAbility";
import Moves from "./Moves/Moves";
import Stats from "./Stats/Stats";
import Gallery from "./Gallery/Gallery";
import {useNavigate} from "react-router-dom";
import Tooltip from "react-simple-tooltip";
import {MovesButton} from "../Detail/Moves/Moves.styles";

const Detail = () => {
  const {userId} = useParams();
  const [detail, setDetail] = useState({});
  // const [abilities, setAbilities] = useState([]);
  // const [heldItems, setHeldItems] = useState([]);
  // const [image, setImage] = useState(null);
  // const [name, setName] = useState("");
  // const [type, setType] = useState("");
  // const [weight, setWeight] = useState("");
  // const [moves, setMoves] = useState([]);
  // const [stats, setStats] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(async () => {
    await getDetail();
  }, []);

  // useEffect(async () => {
  //   if (detail !== undefined) {
  //     await setAbilities(detail.abilities);
  //     await setHeldItems(detail.held_items);
  //     if (detail.sprites !== undefined) {
  //       await setImage(detail.sprites.front_default);
  //     }
  //     if (detail.types !== undefined) {
  //       await setType(detail.types[0].type.name);
  //     }
  //     await setName(detail.name);
  //     await setWeight(detail.weight);
  //     if (detail.moves !== undefined) {
  //       setMoves(detail.moves);
  //     }
  //     if (detail.stats !== undefined) {
  //       await setStats(detail.stats);
  //     }
  //     if (detail.sprites !== undefined) {
  //       await setImages(detail.sprites);
  //     }
  //   }
  // });
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

  const {abilities, moves, held_items, stats, sprites, types, name, weight} =
    detail;
  // console.log(sprites.front_default);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Detail/${userId}/${name}/Gallery`);
  };

  return (
    <>
      {Object.keys(detail).length && (
        <CardDetail>
          <CardSmall>
            <DropdownMenuAbility itemsDropdown={abilities} />
          </CardSmall>
          <CardSmall>
            <ImageContainer>
              <img src={sprites.front_default} />
            </ImageContainer>

            <Bigtext>{name}</Bigtext>
            <SmallText>name </SmallText>

            <Bigtext>{types[0].type.name}</Bigtext>
            <SmallText>type</SmallText>

            <Bigtext>{weight}</Bigtext>
            <SmallText>weight</SmallText>
          </CardSmall>

          <CardSmall>
            <DropdownMenuItems itemsDropdown={held_items} />
          </CardSmall>
          <CardSmall style={{display: "flex"}}>
            <Moves moves={moves} />
            <Tooltip
              background={"#243247"}
              radius={10}
              arrow={8}
              placement={"top"}
              content="Moves which pokemon can make"
            >
              <ButtonTooltip>?</ButtonTooltip>
            </Tooltip>
          </CardSmall>
          <CardSmall style={{display: "flex"}}>
            <Stats stats={stats} />
            <Tooltip
              background={"#243247"}
              radius={10}
              arrow={8}
              placement={"top"}
              content="Basic and important statistic of pokemon"
            >
              <ButtonTooltip>?</ButtonTooltip>
            </Tooltip>
          </CardSmall>
          <CardSmall style={{display: "flex"}}>
            <MovesButton onClick={handleClick}> Gallery </MovesButton>
            <Tooltip
              background={"#243247"}
              radius={10}
              arrow={8}
              placement={"top"}
              content="Pictures of pokemons"
            >
              <ButtonTooltip>?</ButtonTooltip>
            </Tooltip>
          </CardSmall>
        </CardDetail>
      )}
    </>
  );
};

export default Detail;
