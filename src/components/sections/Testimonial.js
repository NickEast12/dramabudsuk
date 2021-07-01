import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import QuoteIcon from '../../svgs/quote.svg'

const TestimonialStyles = styled.section`
    width: 100%;
    background-color: rgb(246, 246, 246);
    padding: 3rem 0;
    .t-m {
        width: 90%;
        margin: var(--auto);
        &__img {
            width: 90%;
            margin: var(--auto);
            position: relative;
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
    }
`
const Testimonial = () => {
    const i = true
    return (
        <TestimonialStyles>
            <div className="t-m">
                <div className="t-m__img">
                    <StaticImage
                        src="../../assets/images/rebeccawall.jpeg"
                        alt="A dinosaur"
                        placeholder="blurred"
                    />
                    <div className="overlay" />
                </div>
                <div className="t-m__text">
                    <QuoteIcon />
                    <h4>
                        Quote from one of the franchisees reccomending others to{' '}
                        <span>get involved</span>
                    </h4>
                    <section>
                        <h6>Franchisee Name</h6>
                        <p>Wallington, Surrey</p>
                    </section>
                </div>
            </div>
        </TestimonialStyles>
    )
}

export default Testimonial
