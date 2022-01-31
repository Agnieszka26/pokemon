import styledComponents from "styled-components";

const Tile = styledComponents.div`
display:flex;
padding:.52rem;
margin:5px;
width:40px;
height:40px;
justify-content:center;
justify-items:center;
text-align:center;
align-items: center;
background-color:white;
border-radius:2px;
border: 1px solid #4e255e;
font-size: 8px;
color: #4e255e;
`;

const CardMovesContainer = styledComponents.div`
width: 100%;
// display:flex;
// flex-basis: 100%;

`;

const MovesButton = styledComponents.button`
display:inline-block;
width:100%;
padding:.5rem;
margin-right: .6rem;
background-color:#dfbdfa;
box-shadow:inset 0px 1px 0px 0px #efdcfb;
border-radius:6px;
border:1px solid #c584f3;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:75%;
font-weight:bold;
text-decoration:none;
text-shadow:0px 1px 0px #9752cc;

&:hover {
background-color:#bc80ea;
}

&:active {
position:relative;
top:1px;
}
`;

const MovesTileContainer = styledComponents.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
padding: 1rem;
`;
const ListItemMoves = styledComponents.p`
display:flex;
  color: #f947e891;
  text-align: center;
  padding: .1rem 2rem;
  margin: .2rem;
`;

const ButonChangeTileToList = styledComponents.div`
margin: 1rem 45% -0.5rem 45%;
// margin:.3rem ;
padding: .2rem;
display:flex;
&:hover{
  background-color:grey;
}

`;

export {
  ButonChangeTileToList,
  ListItemMoves,
  Tile,
  CardMovesContainer,
  MovesTileContainer,
  MovesButton,
};
