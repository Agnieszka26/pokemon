import styledComponents from "styled-components";

const Tile = styledComponents.div`
width:40px;
height:40px;
display:flex;
justify-content:center;
justify-items:center;
text-align:center;
font-size: 8px;
color: #4e255e;
background-color:white;
padding:2px;
margin:5px;
border-radius:2px;
border: 1px solid #4e255e;

`;
const CardMovesContainer = styledComponents.div`
width: 100%;
// display:flex;
// justify-content: center;
// a
`;
const MovesButton = styledComponents.button`
box-shadow:inset 0px 1px 0px 0px #efdcfb;
background-color:#dfbdfa;
border-radius:6px;
border:1px solid #c584f3;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #9752cc;

&:hover {
background-color:#bc80ea;
}
&:active {
position:relative;
top:1px;
}

      





// font-size:20px;
// margin: 5% 15%;
// border-width:0px;
// color:#bbc3cf;
// border-radius:5px;

// text-shadow: 0px 1px 0px #000;
// background: linear-gradient(
//     180.2deg,
//     #f947e8,
//     #5193f6
//   );
  
// &:hover{
//     background: linear-gradient(
//         180.2deg,
        
//         #5193f6,
//         #f947e8
//       );

    
}
`;
const MovesTileContainer = styledComponents.div`
display:flex;
flex-wrap: wrap;
justify-content:center;`;

export {Tile, CardMovesContainer, MovesTileContainer, MovesButton};