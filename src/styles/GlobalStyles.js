import { createGlobalStyle } from 'styled-components'
import Vars from './Vars'
import Animations from './Animations'
import Typography from './Typography'

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
      font-family: var(--main);
      margin: 0;
      letter-spacing: -0.01em;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
      font-weight: 100;
    }
    p {
        line-height: 1.45;
    }
    p , a, li, input, address, label,input, textarea, span  {
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      font-family: var(--main);
    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
   .btn {
    padding: .85rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0 auto;
    span {
        display: block;
        font-size: 1rem;
        letter-spacing: .25px;
        display: flex;
        align-items: center;
        font-weight: 500;
        svg {
            width: 20px;
            height: 20px;
            margin-right: 15px;
            fill: var(--white);
        }
    }
   }
   .btn--main {
    background: rgb(249,48,54);
    border: none;
    border-radius: 20px;
    span {
        color: var(--white);
    }
   }
   .btn--alt {
       background: var(--white);
       border: none;
       border-radius: 20px;
       span {
           color: var(--first);
       }
   }
   .f-a {
       position: relative;
       overflow: clip;
       width: 100%;
       height: 12rem;
       text-align: center;
       z-index: -5;
        margin: -5rem auto 0 auto;
        max-width: var(--maxWidth);
           svg {
            position: absolute;
            right: -5rem;
            top: 0;
            width: 180px;
            height: auto;
            transform: rotate(10deg);
            opacity: 0.35;
           
       }
        }
   .f-a-a {
       position: relative;
       overflow: clip;
       width: 100%;
       height: 12rem;
       text-align: center;
       z-index: -5;
        margin: -7rem auto 0 auto;
        max-width: var(--maxWidth);
           svg {
            position: absolute;
            left: -5rem;
            top: 0;
            width: 180px;
            height: auto;
            transform: rotate(10deg);
            opacity: 0.35;
           
       }
        }
    a[aria-current="page"] {
        color: var(--first);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`

export default GlobalStyles
