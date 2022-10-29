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
}

a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
