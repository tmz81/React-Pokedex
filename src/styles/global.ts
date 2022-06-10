import bgPokeball from '/pokeball.svg';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 2.5rem 1.25rem;
  }

  html, body {
    overflow: hidden;
  }

  body {
    background-color: #f1f1f1;
    background-image: url(${bgPokeball});
    background-repeat: no-repeat;
    background-size: 35vw;
    background-position-x: 4rem;
    background-position-y: 8rem;
    background-attachment: fixed;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;