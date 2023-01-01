import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 20px 40px;

  @media screen and (max-width: 800px){
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
