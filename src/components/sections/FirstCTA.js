import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import FlowerIcon from '../../svgs/dramabuds-flower-white.svg'

const FirstCTAStyles = styled.section`
    width: 100%;
    background-color: var(--first);
    padding: 3rem 0 0 0;
    position: relative;
    &::after {
        position: absolute;
        bottom: -2rem;
        width: 100%;
        height: 2rem;
        background: var(--secondary);
        content: '';
    }
    .f-cta {
        position: relative;
        width: 90%;
        padding: 1rem 1rem 2rem 1rem;
        border-radius: 4.5px;
        margin: var(--auto);
        max-width: 900px;
        h4 {
            text-align: center;
            color: var(--white);
            font-weight: 700;
        }
        button {
            margin-top: 2rem;
        }
        #flower-left {
            width: 50px;
            position: absolute;
            bottom: 0;
            left: 0;
            @media only screen and (min-width: 768px) {
                width: 60px;
            }
            @media only screen and (min-width: 1280px) {
                width: 70px;
            }
        }
        #flower-right {
            width: 50px;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: scaleX(-1);
            @media only screen and (min-width: 768px) {
                width: 60px;
            }
            @media only screen and (min-width: 1280px) {
                width: 70px;
            }
        }
    }
`
const FirstCTA = () => {
    const i = true
    return (
        <FirstCTAStyles>
            <div className="f-cta">
                <h4>Book a free no-obligation chat today</h4>
                <button type="button" className="btn btn--alt">
                    <Link to="/get-started">
                        <span>Get started</span>
                    </Link>
                </button>
                <FlowerIcon id="flower-left" />
                <FlowerIcon id="flower-right" />
            </div>
        </FirstCTAStyles>
    )
}

export default FirstCTA
