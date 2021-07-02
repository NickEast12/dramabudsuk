import React, { useState } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import FlowerIcon from '../../svgs/dramabuds-flower-white.svg'

const HeroStyles = styled.header`
    width: 100%;
    background-color: var(--first);
    position: relative;
    z-index: 15;
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
        @media only screen and (min-width: 375px) {
            height: 85vh;
            padding-top: 6rem;
        }
        @media only screen and (min-width: 414px) {
            height: 80vh;
            padding-top: 5rem;
        }
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
                    padding: 0.95rem 0;
                    border-radius: 5px 5px 0 0;
                    border: none;
                    text-align: center;
                }
                input::placeholder {
                    text-align: center;
                }
                button {
                    padding: 0.95rem 0;
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
    const [email, setEmail] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        navigate('/get-started', {
            state: { email },
        })
    }
    return (
        <HeroStyles>
            <div className="hero">
                <h1>Join our franchise family</h1>
                <p>Plant a seed. Watch it grow.</p>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="f-i">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
