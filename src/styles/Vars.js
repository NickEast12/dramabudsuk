import { css } from 'styled-components'

const vars = css`
    :root {
        //*Colours
        --first: rgb(249, 48, 54);
        --secondary: rgb(93, 175, 74);
        --tertiary: rgb(249, 132, 55);
        --offWhite: rgb(250, 250, 250);
        --white: rgb(255, 255, 255);
        --black: rgb(0, 0, 0);
        //*Fonts
        --main: sofia-pro-soft, -apple-system, system-ui, 'Helvetica Neue',
            Helvetica, Arial, sans-serif;
        //*Font-size
        --titleLarge: 3.052rem;
        --titleMedium: 2.441rem;
        --titleRegular: 1.953rem;
        --titleSmall: 1.563rem;
        --titleExtraSmall: 1.25rem;
        --base: 1rem;
        --textMedium: 0.833rem;
        --textSmall: 0.8rem;
        //*Widths
        --maxWidth: 1100px;
        --auto: 0 auto;
        //* Border radius
        //* Box shadow
        //* Transition
        --usual: all 0.35s ease;
    }
`

export default vars
