import { createGlobalStyle } from 'styled-components';
import Vars from './Vars';
import Animations from './Animations';
import Typography from './Typography';

const GlobalStyles = createGlobalStyle`
    ${Vars}
    ${Animations}
    ${Typography}
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

    p , a, li, input, address, label,input, textarea  {

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
