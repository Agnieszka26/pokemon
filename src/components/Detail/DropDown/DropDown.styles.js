import styledComponents from "styled-components";

const Menu = styledComponents.div`

    background: #ffffff;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: ${props => props.active ? "0" : "1"};
    visibility: ${props => props.active ? "hidden" : "visible"};
    transform: ${props => props.active ? "translateY(-20px)": "translateY(0)"};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }
  `;
// to chyba tez na propsach
//   .menu.active {
//     opacity: 1;
//     visibility: visible;
//     transform: translateY(0);
//   }

const MenuUl = styledComponents.ul`
 
    list-style: none;
    padding: 0;
    margin: 0;
`;

const MenuLi = styledComponents.li`
    border-bottom: 1px solid #dddddd;
`;

const MenuA = styledComponents.a`
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`;

// .menu-trigger {
//     background: #ffffff;
//     border-radius: 90px;
//     cursor: pointer;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 4px 6px;
//     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
//     border: none;
//     vertical-align: middle;
//     transition: box-shadow 0.4s ease;
//   }

//   .menu-trigger:hover {
//     box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
//   }

//   .menu-trigger span {
//     font-weight: 700;
//     vertical-align: middle;
//     font-size: 14px;
//     margin: 0 10px;
//   }

//   .menu-trigger img {
//     border-radius: 90px;
//   }

export {Menu, MenuLi, MenuA, MenuUl};
