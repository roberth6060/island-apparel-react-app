import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 35px 20px;
  background-color: #fff6bf;
  height: 5vh;
  margin: 20px 0;
`;

export const LogoContainer = styled(Link)`
  font-family: "Qwitcher Grypen", cursive;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// .navbar {

//   a {
//     text-decoration: none;
//     color: black;
//   }
//   li {
//     list-style: none;
//     display: flex;
//     align-items: center;
//   }
//   /* ====== LOGO ====== */
//   #logo {
//
//   }

//   /* ====== NAVBAR MENU ====== */
//   .menu {
//     display: flex;
//     font-size: 18px;
//     gap: 1em;
//     z-index: 1;

//     a {
//       padding: 5px;
//       min-width: 3.5em;
//       font-size: 1.2em;
//       text-align: center;

//       &:hover {
//         background-color: rgba(255, 0, 0, 0.8);

//         transition: 0.5s ease;
//       }
//     }
//     /* ====== DROPDOWN MENU ====== */
//     .shop-menu {
//       position: relative;

//       &:hover {
//         .dropdown {
//           //Will impliment feature later
//           display: none;
//           z-index: 1;
//         }
//       }

//       .dropdown {
//         background-color: #fff6bf;

//         display: none;
//         padding: 1em 1em;
//         position: absolute;
//         top: 40px;

//         li + li {
//           margin-top: 10px;
//         }
//         li {
//           padding: 0.5em 1em;
//           text-align: center;
//           width: 6em;
//         }
//       }
//     }
//   }
//   /* ====== CHECKBOX DISPLAY NONE ====== */
//   input[type="checkbox"] {
//     display: none;
//   }
//   /* ====== HAMBURGER MENU ====== */
//   .hamburger {
//     display: none;
//     font-size: 24px;
//     user-select: none;
//     cursor: pointer;
//   }
// }

// /* ================== MOBILE VIEW MEDIA QUERIES ================== */
// @media (max-width: 804px) {
//   /* ====== NAVBAR MENU ====== */
//   body:hover {
//     .menu {
//       display: none;
//     }
//   }
//   .navbar {
//     .menu {
//       background-color: #fff6bf;
//       top: 60px;
//       display: none;
//       position: absolute;
//       right: 0;
//       left: 0;
//       text-align: center;
//       padding: 16px 0;
//       margin: 29px;

//       a {
//         text-align: left;
//       }

//       li {
//         a:hover {
//           display: inline-block;
//           transition: 0.3s ease;
//         }
//       }

//       li + li {
//         margin-top: 12px;
//         width: auto;
//       }
//     }

//     .hamburger {
//       display: block;
//     }

//     .dropdown {
//       left: 36px !important;
//       top: 5px !important;
//       transform: translate(35%);
//     }

//     input[type="checkbox"]:checked ~ .menu {
//       display: block;
//     }
//   }
// }
