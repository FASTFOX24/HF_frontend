import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
 *{
        box-sizing: border-box;
        
    }
    body {
        font-family: "Pretendard";
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        color: ${theme.color.gray.black};
        cursor: pointer;
    }
    ol, ul{
        list-style: none;
    }
    input {
        background: none;
        outline: none;
    }
    button, input {
        padding: 0;
        background: transparent;
        cursor: pointer;
        border: none;
    }
    a{
        color: inherit;
        text-underline-offset: 3px;
    }
`;

export default GlobalStyles;
