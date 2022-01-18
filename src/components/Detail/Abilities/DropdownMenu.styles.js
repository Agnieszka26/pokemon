import react from "react";
import styledComponents from "styled-components";

const Button = styledComponents.button`
background: none;
border: none;
text-align: center;
font-size: 17px;
color: rgba(168, 44, 210, 0.56);

`;

const Container = styledComponents.div`

justify-content: center`;
export {Button, Container};

//button czarny
// font-size:15px;

// border-width:1px;
// color:#bbc3cf;
// border-color:#333029;
// font-weight:bold;
// border-radius:15px;

// text-shadow: 0px 1px 0px #000;
// background:linear-gradient(#271c2b, #243247);

// &:hover{
//     background: linear-gradient(#243247, #271c2b);
// }
//`
