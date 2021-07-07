import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const OurFranchiseStyles = styled.section`
    width: 100%;
    padding: 0 0 3rem 0;
    overflow: hidden;
    margin-top: -5rem;
    @media only screen and (min-width: 768px) {
        margin-top: -2rem;
    }
    .o-f {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        position: relative;
        &__img {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 120px);
            grid-gap: 1rem;
            grid-template-areas:
                'a a d'
                'a a d '
                'b c c ';

            &--wrapper {
                width: 100%;
                height: 100%;
                margin: 0 0 0 auto;
                position: relative;
                .gatsby-image-wrapper {
                    width: 100%;
                    height: 100%;
                    border-radius: 4.5px;
                    border: solid 3px #151417;
                    img {
                        object-fit: cover !important;
                    }
                }
                .overlay {
                    position: absolute;
                    bottom: -7px;
                    left: -7px;
                    width: 100%;
                    height: 100%;
                    content: '';
                    border: solid 3px #151417;
                    border-radius: 4.5px;
                    z-index: -2;
                }
                &:nth-child(1) {
                    grid-area: a;
                    .overlay {
                        background-color: var(--first);
                    }
                }
                &:nth-child(2) {
                    grid-area: b;
                    .overlay {
                        background-color: var(--tertiary);
                    }
                }
                &:nth-child(3) {
                    grid-area: c;
                    .overlay {
                        background-color: #ffef00;
                    }
                }
                &:nth-child(4) {
                    grid-area: d;
                    .overlay {
                        background-color: var(--secondary);
                    }
                }
            }
        }
        &__text {
            margin-top: 3rem;
            h2 {
                color: var(--secondary);
                font-weight: 700;
                font-size: 2.25rem;
            }
            p {
                margin-top: 1rem;
                font-weight: 200;
                line-height: 1.45;
            }
        }
        @media only screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'a b';
            grid-gap: 1.5rem;
            padding: 4.5rem 0;
            &__img {
                grid-area: b;
                grid-template-rows: repeat(3, 150px);
                .gatsby-image-wrapper {
                    height: 100%;
                }
            }
            &__text {
                margin-top: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
`
const OurFranchise = () => {
    const i = true
    return (
        <OurFranchiseStyles>
            <div className="o-f">
                <div className="o-f__img">
                    <div className="o-f__img--wrapper">
                        <StaticImage
                            src="../../assets/images/fullblooms.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </div>
                    <div className="o-f__img--wrapper">
                        <StaticImage
                            src="../../assets/images/front-cover.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </div>
                    <div className="o-f__img--wrapper">
                        <StaticImage
                            src="../../assets/images/fairybubbles.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </div>
                    <div className="o-f__img--wrapper">
                        <StaticImage
                            src="../../assets/images/hookparty.jpeg"
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                        <div className="overlay" />
                    </div>
                </div>
                <div className="o-f__text">
                    <h2>Join our franchise</h2>
                    <p>
                        Through exciting and structured drama classes, singing,
                        creative stories and the occasional party, dramabuds is
                        allowing children to learn and develop through play and
                        let their true potential shine – so much so that the
                        demand for more dramabuds teachers is spreading cross
                        the UK! And you can be a part of it with a dramabuds
                        franchise.
                    </p>
                    <p id="opportunity">
                        Yes, with this amazing increase in popularity from
                        families, schools, nurseries and anywhere you might find
                        children, dramabuds’ franchise opportunity has become a
                        great success story, which just continues to grow. So,
                        if you want to be part of this incredible experience,
                        you’ve come to the right place.
                    </p>
                </div>
            </div>
        </OurFranchiseStyles>
    )
}

export default OurFranchise
