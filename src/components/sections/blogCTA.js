import React from 'react'
import styled from 'styled-components'
import AccentIcon from '../../svgs/alt-flower.svg'
import SecondAccentIcon from '../../svgs/flower.svg'

const BlogCTAStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    overflow-x: hidden;
    .b-cta {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        text-align: center;
        position: relative;
        padding-top: 1rem;
        svg {
            &:nth-child(1) {
                position: absolute;
                top: -2rem;
                right: 0;
                width: 50px;
                height: 50px;
                transform: rotate(-50deg);
            }
            &:nth-child(2) {
                position: absolute;
                top: -2rem;
                left: 0;
                width: 50px;
                height: 50px;
            }
        }
        h4 {
            font-weight: 700;
        }
        p {
            margin: 1rem 0;
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
                background: var(--secondary);
                span {
                    color: var(--white);
                }
            }
        }
    }
`
const BlogCTA = () => {
    const i = true
    return (
        <BlogCTAStyles>
            <div className="b-cta">
                <SecondAccentIcon />
                <AccentIcon />
                <h4>Sign up to our newsletter</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Optio, vero.
                </p>
                <form action="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your email address"
                    />
                    <button type="submit">
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>
        </BlogCTAStyles>
    )
}

export default BlogCTA
