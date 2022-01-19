import styledComponents from "styled-components";

const BackgroundModal = styledComponents.div`
position:absolute;
width:100%;
height:100%;
background-color: #24324780;
top:0;
left:0;
`;

const ModalContainer = styledComponents.div`
position:relative;
top:50%;
left:50%;
width:60vw;
transform: translate(-50%,-50%);
background-color:#bbc3cf;
border-radius:15px;
`;

const ModalText = styledComponents.p`
padding:2rem;
color: #ff206391;
`;
export {BackgroundModal, ModalContainer, ModalText};
