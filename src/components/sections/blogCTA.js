import { navigate } from 'gatsby'
import React, { useState } from 'react'

import styled from 'styled-components'
import AccentIcon from '../../svgs/alt-flower.svg'
import SecondAccentIcon from '../../svgs/flower.svg'

const BlogCTAStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    overflow-x: hidden;
    background-color: var(--secondary);
    .b-cta {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        text-align: center;
        position: relative;
        padding-top: 1rem;
        svg {
            width: 50px;
            height: 50px;
            &:nth-child(1) {
                position: absolute;
                top: -2rem;
                right: 0;
                transform: rotate(-50deg);
                @media only screen and (min-width: 768px) {
                    top: -2rem;
                    right: -5rem;
                    width: 90px;
                    height: 90px;
                }
                @media only screen and (min-width: 1024px) {
                    right: -50px;
                }
                @media only screen and (min-width: 1280px) {
                    right: 40px;
                }
            }
            &:nth-child(2) {
                position: absolute;
                top: -2rem;
                left: 0;
                @media only screen and (min-width: 768px) {
                    top: -2rem;
                    left: -5rem;
                    width: 90px;
                    height: 90px;
                }
                @media only screen and (min-width: 1024px) {
                    left: -50px;
                }
                @media only screen and (min-width: 1280px) {
                    left: 40px;
                }
            }
            @media only screen and (min-width: 414px) {
                width: 55px;
                height: 55px;
            }
        }

        h3 {
            font-weight: 700;
            color: var(--white);
            margin-top: 0.5rem;
        }
        p {
            margin: 1rem 0;
            color: var(--white);
        }
        form {
            display: flex;
            flex-direction: column;
            input {
                padding: 0.85rem 0.9rem;
                border-radius: 4.5px;
                border: none;
                background: var(--offWhite);
            }
            button {
                margin-top: 0.5rem;
                padding: 0.85rem 0.9rem;
                border-radius: 4.5px;
                border: none;
                background: var(--first);
                span {
                    color: var(--white);
                }
            }
        }
        @media only screen and (min-width: 768px) {
            width: 70%;
            form {
                max-width: 500px;
                padding-top: 1rem;
                flex-direction: row;
                text-align: center;
                margin: var(--auto);
                button {
                    margin-top: 0;
                    width: 250px;
                    border-radius: 0 4.5px 4.5px 0;
                }
                input {
                    width: 100%;
                    border-radius: 4.5px 0 0 4.5px;
                }
            }
        }
    }
`
const BlogCTA = () => {
    const [email, setEmail] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        navigate('/get-started', {
            state: {
                email,
            },
        })
    }
    return (
        <BlogCTAStyles>
            <div className="b-cta">
                <SecondAccentIcon />
                <AccentIcon />
                <h3>Join our franchise family today</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Optio, vero.
                </p>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">
                        <span>Get started</span>
                    </button>
                </form>
            </div>
        </BlogCTAStyles>
    )
}

export default BlogCTA
