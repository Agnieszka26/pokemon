import styledComponents from "styled-components";

const Item = styledComponents.div`
margin:1rem 0.95rem;
&:hover{
    cursor: pointer;
    color: rgba(168, 44, 210);
}
`;

const ItemText = styledComponents.h5`

`;

export {Item, ItemText};
