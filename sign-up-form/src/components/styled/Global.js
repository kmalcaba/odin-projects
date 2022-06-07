import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Norse-Bold;
    src: url(./fonts/Norse-Bold.otf);
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;
