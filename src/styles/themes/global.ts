import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: "#FFFFFF";
  }

  button {
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;
