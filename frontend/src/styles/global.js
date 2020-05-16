import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #626881;
        font-family: 'Open Sans', sans-serif;
        padding: 40px 100px;
    }

    body, html, #root {
        height: 100%;
    }

    ul {
        list-style: none;
    }

    a {
        color: #333;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }
`;