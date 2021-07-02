import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import QuoteSVG from '../../svgs/quote.svg'

const FoundersNotesStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    .founders {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        &__text {
            h6 {
                color: var(--secondary);
                font-weight: 700;
            }
            svg {
                width: 30px;
                height: 25px;
                margin: 1rem 0 0.75rem 0;
            }
            h5 {
                font-size: 1.4rem;
                font-weight: 800;
            }
            > p {
                margin-top: 1rem;
                font-weight: 200;
                line-height: 1.45;
            }
            section {
                margin-top: 1rem;
            }
        }
        &__img {
            width: 90%;
            margin: 2rem auto 0 auto;
            border-radius: 4.5px;
            position: relative;
            max-width: 450px;
            section {
                position: relative;
            }
            .gatsby-image-wrapper {
                border-radius: 4.5px;
                border: solid 3px #151417;
                z-index: 5;
            }
            .overlay {
                position: absolute;
                bottom: -1rem;
                left: -1rem;
                width: 100%;
                height: 100%;
                content: '';
                border: solid 3px #151417;
                background-color: var(--secondary);
                border-radius: 4.5px;
                z-index: 2;
            }
        }
        @media only screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: 50% 1fr;
            grid-gap: 2rem;
            &__img {
                padding-top: 2rem;
                section {
                    width: 100%;
                    height: auto;
                }
                .gatsby-image-wrapper {
                    width: 100%;
                    height: 100%;
                }
                .overlay {
                }
            }
        }
    }
`
const FoundersNotes = () => (
    <FoundersNotesStyles>
        <div className="founders">
            <div className="founders__text">
                <h6>A note from our founder</h6>
                <QuoteSVG />
                <h5>
                    Dramabuds was born in the summer of 2008 in my back garden
                    when my daughter loved dressing up as a princess and acting
                    out stories
                </h5>
                <p>
                    Fast forward several years and not only was the business
                    named Best New Activity For The Under 5s’ in the whole of
                    the UK by What’s On 4 Little Ones, but we have now also
                    entertained over 10,000 children with birthday parties;
                    launched a programme for schools, nurseries and early year
                    settings; and grown the franchise arm.
                </p>
                <p>
                    I adore going on a journey of discovery with every child
                    that attends dramabuds and, if you sign up as a franchisee,
                    I know you will too.
                </p>
                <section>
                    <h6>Rebecca Wall</h6>
                    <p>Founder and Director</p>
                </section>
            </div>
            <div className="founders__img">
                <section>
                    <StaticImage
                        src="../../assets/images/rebeccawall.jpeg"
                        alt="A dinosaur"
                        placeholder="blurred"
                    />
                    <div className="overlay" />
                </section>
            </div>
        </div>
    </FoundersNotesStyles>
)

export default FoundersNotes
