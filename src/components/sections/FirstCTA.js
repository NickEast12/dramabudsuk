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
        max-width: var(--maxWidth);
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
        }
        #flower-right {
            width: 50px;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: scaleX(-1);
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
                    <span>Get started</span>
                </button>
                <FlowerIcon id="flower-left" />
                <FlowerIcon id="flower-right" />
            </div>
        </FirstCTAStyles>
    )
}

export default FirstCTA
