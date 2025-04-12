import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`


  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
    user-select: none;
  }

  html {
    width: 100vw;
    height: 100vh;
    /* font-size: 62.5%; */
    min-height: 100vh;
    
  }
`;