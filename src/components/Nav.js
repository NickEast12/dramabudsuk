import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { window } from 'browser-monads'
import { Link } from 'gatsby'
import Logo from '../svgs/dramabuds-logo-cropped.svg'
import ArrowIcon from '../svgs/arrow-right.svg'
import FaceBookIcon from '../svgs/facebook.svg'
import InstagramIcon from '../svgs/instagram.svg'
import TwitterIcon from '../svgs/twitter.svg'

const NavStyles = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 999;
    .nav {
        transition: var(--usual);
        &__wrapper {
            transition: var(--usual);
            width: 90%;
            margin: var(--auto);
            padding: 1.15rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__logo {
            position: relative;
            z-index: 550;
            svg {
                width: 185px;
                background-color: var(--white);
                border-radius: 18px;
                padding: 0.5rem;
            }
        }
        &__hamburger {
            position: relative;
            z-index: 1000;
            width: 45px;
            height: 40px;
            border-radius: 50%;
            transition: all 0.35s linear;
            position: relative;
            padding: 0.1rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--secondary);
            section {
                position: relative;
                z-index: 1000;
                padding: 0.6rem 0.25rem 0.25rem 0.18rem;
                width: 30px;
                margin: 0 auto;
                text-align: center;
                div {
                    position: relative;
                    z-index: 1000;
                    height: 3px;
                    margin: 0 0 5px auto;
                    background-color: var(--white);
                    content: '';
                    border-radius: 3px;
                    transition: all 0.25s linear;
                    transform-origin: 2px;
                    &:nth-child(1) {
                        transform: ${({ open }) =>
                            open ? 'rotate(40deg)' : 'rotate(0deg)'};
                        width: ${({ open }) => (open ? '30px' : '25px')};
                    }
                    &:nth-child(2) {
                        transform: ${({ open }) =>
                            open ? 'translateX(50px)' : 'translateX(0)'};
                        opacity: ${({ open }) => (open ? '0' : '1')};
                        width: ${({ open }) => (open ? '100%' : '25px')};
                    }
                    &:nth-child(3) {
                        width: ${({ open }) => (open ? '30px' : '25px')};
                        transform: ${({ open }) =>
                            open ? 'rotate(-40deg)' : 'rotate(0deg)'};
                    }
                }
            }
            @media only screen and (min-width: 375px) {
                section {
                    padding: 5px 3px 1px 0;
                }
            }
        }
        &__desktop {
            display: none;
        }
    }
    .mobile-menu {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0 auto;
        z-index: ${({ open }) => (open ? '500' : '-5')};
        background-color: var(--secondary);
        clip-path: circle(0% at 93% 30px);
        transition: background-color 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s,
            clip-path 1s cubic-bezier(0.4, 0, 0.2, 1);
        &__wrapper {
            width: 100%;
            height: 100%;
            visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
            z-index: ${({ open }) => (open ? '500' : '-5')};
            ul {
                list-style: none;
                padding: 7.5rem 0 0 0;
                text-align: center;
                li {
                    padding: 1.25rem 0;
                    font-size: 1.2rem;
                    text-align: center;
                    margin: 0 auto;
                    opacity: 0;
                    transform: translateY(-15px);
                    z-index: ${({ open }) => (open ? '500' : '-5')};
                    &:nth-child(1) {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 0.5s forwards;
                    }
                    &:nth-child(2) {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 0.7s forwards;
                    }
                    &:nth-child(3) {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 0.9s forwards;
                    }
                    &:nth-child(4) {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 1.1s forwards;
                    }
                    &:nth-child(5) {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 1.3s forwards;
                    }
                    a {
                        color: var(--white);
                    }
                }
            }
            &__logo {
                position: absolute;
                display: none;
                top: 1.5rem;
                left: 1.5rem;
                svg {
                    border-radius: 20px;
                    padding: 0.25rem 0.6rem;
                    background-color: var(--white);
                    width: 185px;
                }
            }
            &__icons {
                width: 125px;
                padding-top: 1.5rem;
                margin: var(--auto);
                display: flex;
                justify-content: space-between;
                a {
                    &:nth-child(1) svg {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 1.8s forwards;
                    }
                    &:nth-child(2) svg {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 1.9s forwards;
                    }
                    &:nth-child(3) svg {
                        animation: ${({ open }) => (open ? 'liAnimation' : '')}
                            0.65s 2s forwards;
                    }
                }

                svg {
                    width: 25px;
                    fill: var(--white);
                    opacity: 0;
                    transform: translateY(-15px);
                }
            }
        }
    }
`
const Nav = () => {
    // ? Mobile nav
    const [open, setOpen] = useState(false)
    // ? Freeze window when nav is active
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        }
        if (!open) {
            document.body.style.overflow = 'auto'
        }
    }, [open])
    // ? Scroll
    const [scroll, setScroll] = useState(false)
    const changeNavScroll = () => {
        if (window.scrollY >= 20) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    // ? Add event listener to listen for scroll
    window.addEventListener('scroll', changeNavScroll)
    return (
        <NavStyles open={open}>
            <div className={scroll ? 'scroll-active nav' : 'nav'}>
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div
                        className="nav__hamburger"
                        onClick={() => setOpen(!open)}
                        onKeyDown={() => setOpen(!open)}
                        role="button"
                        tabIndex={0}
                        open={open}
                    >
                        <section>
                            <div />
                            <div />
                            <div />
                        </section>
                    </div>
                    <div className="nav__desktop">
                        <ul>
                            <li>item 1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={open ? 'mobile-menu menu-active' : 'mobile-menu'}>
                <div className="mobile-menu__wrapper">
                    <div className="mobile-menu__wrapper__logo">
                        <Logo />
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Opportunity</Link>
                        </li>
                        <li>
                            <Link to="/">About us</Link>
                        </li>
                        <li>
                            <Link to="/">Reviews</Link>
                        </li>
                        <li>
                            <Link to="/">Resources</Link>
                        </li>
                        <li>
                            <Link to="/">
                                <button type="button" className="btn btn--main">
                                    <span>Get started</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-menu__wrapper__icons">
                        <Link to="/">
                            <FaceBookIcon />
                        </Link>
                        <Link to="/">
                            <TwitterIcon />
                        </Link>
                        <Link to="/">
                            <InstagramIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </NavStyles>
    )
}

export default Nav
