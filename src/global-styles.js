import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'helvetica', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f0e6db ;
        z-index: -1;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;
