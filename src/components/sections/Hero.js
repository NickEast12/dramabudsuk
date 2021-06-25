import React from 'react'
import styled from 'styled-components'
import FlowerIcon from '../../svgs/dramabuds-flower-white.svg'

const HeroStyles = styled.header`
    width: 100%;
    background-color: var(--first);
    position: relative;
    &::after {
        width: 100%;
        height: 2rem;
        position: absolute;
        bottom: -1rem;
        background: var(--secondary);
        content: '';
    }
    .hero {
        position: relative;
        height: 100vh;
        padding-top: 6rem;
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);

        h1 {
            text-align: center;
            color: var(--white);
            font-weight: 800;
        }
        p {
            color: var(--white);
            text-align: center;
            font-weight: 500;
            margin-top: 1rem;
        }
        form {
            margin: 1.5rem auto 0 auto;
            text-align: center;
            .f-i {
                display: flex;
                flex-direction: column;
                width: 90%;
                margin: var(--auto);
                input {
                    padding: 0.75rem 0;
                    border-radius: 5px 5px 0 0;
                    border-bottom: 0;
                    border: solid 4px var(--secondary);
                    text-align: center;
                }
                input::placeholder {
                    text-align: center;
                }
                button {
                    padding: 0.75rem 0;
                    background: var(--secondary);
                    border: 0;
                    border-radius: 0 0 5px 5px;
                    span {
                        color: var(--white);
                    }
                }
            }
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
const Hero = () => {
    const i = true
    return (
        <HeroStyles>
            <div className="hero">
                <h1>Join our franchise family</h1>
                <p>Plant a seed. Watch it grow.</p>
                <form action="">
                    <div className="f-i">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email address"
                        />
                        <button type="submit">
                            <span>Get started</span>
                        </button>
                    </div>
                </form>
                <FlowerIcon id="flower-left" />
                <FlowerIcon id="flower-right" />
            </div>
        </HeroStyles>
    )
}

export default Hero
