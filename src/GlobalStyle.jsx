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
.loader-container {

width: 100vw;
height: 100vh;
position: relative;
display: flex;
${"" /* background-color: red; */}
justify-content: center;
text-align: center;
align-items: center;
}

`;

export default GlobalStyle;
