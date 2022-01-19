import react from "react";
import styledComponents from "styled-components";

const Button = styledComponents.button`
background: none;
border: none;
text-align: center;
font-size: 75%;
color: rgba(168, 44, 210, 0.56);


&:hover{
    color: rgba(168, 44, 210);
}

`;

const Container = styledComponents.div`

justify-content: center`;
export {Button, Container};
