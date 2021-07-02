import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
//* Local Imports
import LeafIcon from '../../svgs/leaf-white.svg'

const WhatWeAreLookingForStyles = styled.section`
    width: 100%;
    padding: 3rem 0 1.5rem 0;
    .c-h {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        text-align: center;
        h4 {
            text-align: center;
            font-weight: 700;
            color: var(--secondary);
        }
        p {
            margin-top: 1rem;
        }
    }
    .careers {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        &__text {
            margin-top: 1.5rem;
            background: var(--secondary);
            border-radius: 4.5px;
            padding: 1.5rem 1rem;
            ul {
                list-style: none;
                color: var(--white);
                li {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 0;
                    font-weight: 200;
                    font-size: 1rem;
                    line-height: 1.4;
                    svg {
                        width: 35px;
                        height: 35px;
                        fill: var(--white);
                        margin-right: 10px;
                    }
                }
            }
        }
        &__img {
            margin: 1.5rem auto 0 auto;
            width: 90%;
            position: relative;
            section {
                &:nth-child(2) {
                    display: none;
                }
            }
            .gatsby-image-wrapper {
                border-radius: 4.5px;
                border: solid 3px #151417;
                z-index: 5;
            }
            .overlay {
                width: 100%;
                height: 100%;
                content: '';
                position: absolute;
                border-radius: 5px;
                bottom: -0.65rem;
                left: -0.65rem;
                background-color: var(--tertiary);
                border: solid 3px #151417;
                z-index: 2;
            }
        }
        @media only screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: 50% 1fr;
            &__text {
                ul li {
                    padding: 0.25rem 0;
                }
            }
            &__img {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                section {
                    position: relative;
                    &:nth-child(2) {
                        display: block;
                        height: 10rem;
                        .overlay {
                            background-color: var(--first);
                        }
                    }
                }
                .gatsby-image-wrapper {
                    height: 100%;
                }
            }
        }
    }
`
const WhatWeAreLookingFor = () => {
    const i = true
    return (
        <WhatWeAreLookingForStyles>
            <div className="c-h">
                <h4>What are we looking for?</h4>
                <p>
                    A performing arts qualification is an advantage – then you
                    just need:
                </p>
            </div>
            <div className="careers">
                <div className="careers__text">
                    <ul>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            To be energetic with a positive, sunny disposition
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            An incredible imagination – could you pretend to be
                            in a princess’s castle one day and a rabbit in the
                            woods the next?
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            A real desire to work with the early year’s age
                            group, plus the patience and kind nature to do it!
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            To be an organised person
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            The passion, motivation and drive to run your own
                            business
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            Joy in creating a nurturing, fun and creative
                            environment where children can feel safe while
                            growing their confidence and self-esteem
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            A confident and good singing voice
                        </li>
                        <li>
                            <span>
                                <LeafIcon />
                            </span>
                            To look forward to smiling every day at work
                        </li>
                    </ul>
                </div>
                <div className="careers__img">
                    <section>
                        <StaticImage
                            src="../../assets/images/careers.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </section>
                    <section>
                        <StaticImage
                            src="../../assets/images/fairybubbles.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </section>
                </div>
            </div>
        </WhatWeAreLookingForStyles>
    )
}

export default WhatWeAreLookingFor
