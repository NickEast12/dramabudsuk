import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --favColour: #1bbc9b;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        
    }
    body {
        width: 100%;
        height: 100%;
        font-size: 1rem;
    }
    a[aria-current="page"] {
        color: var(--favColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`;

export default GlobalStyles;
