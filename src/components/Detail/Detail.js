// import React from "react";
// import {useParams} from "react-router-dom";
// import {useState} from "react/cjs/react.development";
// import {
//   CardDetail,
//   CardSmall,
//   SmallText,
//   Bigtext,
//   ImageContainer,
//   Flex,
//   ButtonTooltip,
// } from "./Detail.style";
// import {useEffect} from "react";
// import DropdownMenuItems from "./HeldItems/DropdownMenuItems";
// import DropdownMenuAbility from "../Detail/Abilities/DropdownMenuAbility";
// import Moves from "./Moves/Moves";
// import Stats from "./Stats/Stats";
// import {useNavigate} from "react-router-dom";
// import Tooltip from "react-simple-tooltip";
// import {MovesButton} from "../Detail/Moves/Moves.styles";

// const Detail = () => {
//   const {userId} = useParams();
//   const [detail, setDetail] = useState({});

//   useEffect(() => {
//     getDetail();
//   }, []);

//   let url = `https://pokeapi.co/api/v2/pokemon/${userId}`;

//   const getDetail = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       await setDetail(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const {abilities, moves, held_items, stats, sprites, types, name, weight} =
//     detail;

//   let navigate = useNavigate();
//   const handleClick = () => {
//     navigate(`/Pokemonlist/Detail/${userId}/${name}/Gallery`);
//   };

//   return (
//     <>
//       {Object.keys(detail).length && ( //to działa ??? jak zmieniam na normalne detail.length to nie można dostać się do pokemona
//         <CardDetail>
//           <CardSmall>
//             <DropdownMenuAbility itemsDropdown={abilities} />
//           </CardSmall>
//           <CardSmall>
//             <ImageContainer>
//               <img src={sprites.front_default} />
//             </ImageContainer>
//             <Bigtext>{name}</Bigtext>
//             <SmallText>name </SmallText>
//             <Bigtext>{types[0].type.name}</Bigtext>
//             <SmallText>type</SmallText>
//             <Bigtext>{weight}</Bigtext>
//             <SmallText>weight</SmallText>
//           </CardSmall>
//           <CardSmall>
//             <DropdownMenuItems itemsDropdown={held_items} />
//           </CardSmall>
//           <CardSmall>
//             <Flex>
//               <Moves moves={moves} />
//               <Tooltip
//                 background={"#243247"}
//                 radius={10}
//                 arrow={8}
//                 placement={"top"}
//                 content="Moves which pokemon can make"
//               >
//                 <ButtonTooltip>?</ButtonTooltip>
//               </Tooltip>
//             </Flex>
//           </CardSmall>
//           <CardSmall>
//             <Flex
//               style={{margin:"0 0 1rem 0", padding:"0", alignItems: "center", justifyContent: "space-between"}}
//             >
//               <h4 style={{margin:"0", padding:"0"}}>Statistics</h4>
//               <Tooltip
//                 background={"#243247"}
//                 radius={10}
//                 arrow={8}
//                 placement={"top"}
//                 content="Basic and important statistic of pokemon"
//               >
//                 <ButtonTooltip>?</ButtonTooltip>
//               </Tooltip>
//             </Flex>

//             <Stats style={{display: "flex"}} stats={stats} />
//           </CardSmall>
//           <CardSmall>
//             <Flex>
//               <MovesButton onClick={handleClick}> Gallery </MovesButton>
//               <Tooltip
//                 background={"#243247"}
//                 radius={10}
//                 arrow={8}
//                 placement={"top"}
//                 content="Pictures of pokemons"
//               >
//                 <ButtonTooltip>?</ButtonTooltip>
//               </Tooltip>
//             </Flex>
//           </CardSmall>
//         </CardDetail>
//       )}
//     </>
//   );
// };

// export default Detail;
