import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --mainColour: #2BA5A2;
        --accentColour: #8E1C55;
        --backgroundColour: #4C4C4C;
        --yellow: #FAE101;

        --slab: museo-slab, -apple-system, system-ui, Helvetica,Arial,sans-serif;
        --serif: museo-sans, -apple-system, system-ui, "Helvetica Neue",Helvetica,Arial,sans-serif;
        
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    a, a:visited {
        color: inherit;
        text-decoration: none;
   }
   html {
      font-size: 16px;

    }
    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
        background-color: var(--backgroundColour);
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: var(--slab);
      margin: 0;
      letter-spacing: -0.05em;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
      font-weight: 100;
    }
    .title--bold {
        font-weight: 700;
    }
    p , a, li, input, address, label,input, textarea  {
      font-family: var(--serif);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
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
