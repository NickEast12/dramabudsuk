import { css } from 'styled-components'

const typography = css`
    html {
        font-size: 18px;
        @media only screen and (min-width: 375px) {
            font-size: 19px !important;
        }
        @media only screen and (min-width: 414px) {
            font-size: 19px !important;
        }
        @media only screen and (min-width: 1280px) {
            font-size: 19px !important;
        }
    }
    h1 {
        font-size: var(--titleLarge);
    }
    h2 {
        font-size: var(--titleMedium);
    }
    h3 {
        font-size: var(--titleMedium);
    }
    h4 {
        font-size: var(--titleRegular);
    }
    h5 {
        font-size: var(--titleRegular);
    }
    h6 {
        font-size: var(--titleSmall);
    }
    p,
    li,
    span,
    i,
    input,
    textarea {
        font-size: var(--base);
    }
`

export default typography
