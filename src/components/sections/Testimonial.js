import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import QuoteIcon from '../../svgs/quote.svg'

const TestimonialStyles = styled.section`
    width: 100%;
    background-color: var(--offWhite);
    padding: 3rem 0 4rem 0;
    .t-m {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        &__img {
            width: 90%;
            margin: var(--auto);
            section {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .gatsby-image-wrapper {
                border-radius: 4.5px;
                border: solid 3px #151417;
                z-index: 100;
            }
            .overlay {
                position: absolute;
                bottom: -1rem;
                left: -1rem;
                width: 100%;
                height: 100%;
                content: '';
                border: solid 3px #151417;
                background-color: var(--first);
                border-radius: 4.5px;
                z-index: 2;
            }
        }
        &__text {
            padding-top: 3rem;
            svg {
                width: 40px;
                height: 30px;
            }
            h4 {
                margin-top: 0.5rem;
                font-size: 1.5rem;
                span {
                    font-weight: 800;
                    font-size: inherit;
                }
            }
            section {
                margin-top: 1rem;
                h6 {
                    font-weight: 700;
                    color: var(--secondary);
                }
            }
        }
        @media only screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            &__text {
                padding-top: 0;
                display: flex;
                flex-direction: column;
                align-items: baseline;
                justify-content: center;
            }
            &__img {
                max-width: 450px;
            }
        }
    }
`
const Testimonial = ({ quote, strong, name, location, children }) => {
    const i = true
    return (
        <TestimonialStyles>
            <div className="t-m">
                <div className="t-m__img">
                    <section>
                        {children}
                        <div className="overlay" />
                    </section>
                </div>
                <div className="t-m__text">
                    <QuoteIcon />
                    <h4>
                        {quote}
                        <span>{strong}</span>
                    </h4>

                    <section>
                        <h6>{name}</h6>
                        <p>{location}</p>
                    </section>
                </div>
            </div>
        </TestimonialStyles>
    )
}

Testimonial.propTypes = {
    children: PropTypes.any,
    quote: PropTypes.any,
    location: PropTypes.any,
    name: PropTypes.any,
    strong: PropTypes.any,
}

export default Testimonial
