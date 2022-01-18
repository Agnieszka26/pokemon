import styledComponents from "styled-components";

const BackgroundModal = styledComponents.div`
width:100%;
height:100%;
background-color: #24324780;
position:absolute;
top:0;
left:0;
`;

const ModalContainer = styledComponents.div`
position:relative;
top:50%;
left:50%;
transform: translate(-50%,-50%);

 width:60vw;
background-color:#bbc3cf;
border-radius:15px;

`;

const ModalText = styledComponents.p`
padding:2rem;


color: #ff206391;
`;
export {BackgroundModal, ModalContainer, ModalText};
