import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const WelcomeStyles = styled.section`
    width: 100%;
    .welcome {
        padding: 4rem 0;
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        &__text {
            margin-top: 3rem;
            h2 {
                font-weight: 700;
                color: var(--secondary);
            }
            h6 {
                margin: 1rem 0;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.45;
            }
            p {
                font-weight: 200;
                line-height: 1.45;
            }
        }
        &__img {
            width: 95%;
            height: auto;
            position: relative;
            margin: 0 0 0 auto;
            .gatsby-image-wrapper {
                border: solid 3px #151417;
                border-radius: 5px;
                width: 100%;
                height: auto;
            }
            &--accent {
                position: absolute;
                bottom: -1.25rem;
                left: -1.25rem;
                width: 100%;
                height: 100%;
                background: var(--secondary);
                border-radius: 5px;
                z-index: -2;
                border: solid 3px #151417;
            }
        }
    }
`
const Welcome = () => {
    const i = true
    return (
        <WelcomeStyles>
            <div className="welcome">
                <div className="welcome__img">
                    <StaticImage
                        src="../../assets/images/welcome.jpeg"
                        alt="A dinosaur"
                        placeholder="blurred"
                    />
                    <div className="welcome__img--accent" />
                </div>
                <div className="welcome__text">
                    <h2>Welcome to dramabuds</h2>
                    <h6>
                        Love the performing arts? Love making a change in
                        children’s lives through theatre? Then you’d be a
                        perfect dramabuds franchisee!
                    </h6>
                    <p>
                        Through exciting and structured drama classes, singing,
                        creative stories and the occasional party, dramabuds is
                        allowing children to learn and develop through play and
                        let their true potential shine – so much so that the
                        demand for more dramabuds teachers is spreading cross
                        the UK! And you can be a part of it with a dramabuds
                        franchise.
                    </p>
                </div>
            </div>
        </WelcomeStyles>
    )
}

export default Welcome
