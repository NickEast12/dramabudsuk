import { css } from 'styled-components'

const Animations = css`
    //? KeyFrames
    @keyframes liAnimation {
        to {
            opacity: 1;
            transform: translateY(0px);
            z-index: 50;
        }
    }

    //? Scroll animations
    .scroll-active {
        background: var(--white);
        transition: var(--usual);
        border-bottom: rgba(0, 0, 0, 0.15) 1px solid;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        .nav__wrapper {
            padding: 0.5rem 0 !important;
            @media only screen and (min-width: 1024px) {
                padding: 0.75rem 0 !important;
            }
            .nav__desktop {
                ul {
                    li {
                        a {
                            color: var(--black);
                        }
                    }
                }
            }
        }
    }
    .menu-active {
        opacity: 1;
        clip-path: circle(100% at 20px 350px) !important;
        .mobile-menu__wrapper {
        }
    }
`

export default Animations
