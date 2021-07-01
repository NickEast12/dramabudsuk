import React from 'react'
import styled from 'styled-components'
import UKIcon from '../../svgs/united-kingdom.svg'
//* Local Imports
import LeafIcon from '../../assets/images/leaf.svg'

const AreasStyles = styled.section`
    width: 100%;
    padding: 5rem 0 3rem 0;
    .areas {
        width: 90%;
        margin: var(--auto);
        text-align: center;
        h3 {
            text-align: center;
            font-weight: 700;
            color: var(--secondary);
        }
        p {
            margin-top: 1rem;
            font-weight: 200;
            line-height: 1.45;
        }
        &__map {
            margin: 1rem auto 0 auto;
            width: 90%;
            svg {
                width: 70%;
                height: auto;
                fill: var(--secondary);
            }
        }
        &__list {
            width: 100%;
            margin: 1.5rem auto 0 auto;
            padding: 1.5rem;
            border-radius: 4.5px;
            border: solid 4px var(--secondary);
            h5 {
                font-weight: 500;
                margin-bottom: 1rem;
                font-size: 1.5rem;
            }
            &__wrapper {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 1rem;
            }
            section {
                margin-bottom: 1rem;
                h6 {
                    font-weight: 700;
                    text-align: center;
                }
                ul {
                    list-style: none;
                    margin: 0.5rem 0 0 0;
                    li {
                        text-align: left;
                        padding: 0.25rem 0;
                        font-size: 1rem;
                        text-align: center;
                        &:before {
                            content: '';
                            display: inline-block;
                            height: 0.85rem;
                            width: 0.85rem;
                            background-image: url(${LeafIcon});
                            background-size: contain;
                            background-repeat: no-repeat;
                            margin-right: 0.25rem;
                        }
                    }
                }
            }
        }
    }
`
const Areas = () => {
    const i = true
    return (
        <AreasStyles>
            <div className="areas">
                <h3>Areas covered</h3>
                <p>
                    Dramabuds is UK-wide, so wherever you are in the country,
                    you can build a franchise for your local community.
                </p>
                <div className="areas__map">
                    <UKIcon />
                </div>
                <div className="areas__list">
                    <h5>We are looking for local leaders in these areas:</h5>
                    <div className="areas__list__wrapper">
                        <section>
                            <h6>Surrey</h6>
                            <ul>
                                <li>Sutton</li>
                                <li>Guildford</li>
                                <li>Dorking</li>
                                <li>Working</li>
                            </ul>
                        </section>
                        <section>
                            <h6>Surrey</h6>
                            <ul>
                                <li>Sutton</li>
                                <li>Guildford</li>
                                <li>Dorking</li>
                                <li>Working</li>
                            </ul>
                        </section>
                        <section>
                            <h6>Surrey</h6>
                            <ul>
                                <li>Sutton</li>
                                <li>Guildford</li>
                                <li>Dorking</li>
                                <li>Working</li>
                            </ul>
                        </section>
                        <section>
                            <h6>Surrey</h6>
                            <ul>
                                <li>Sutton</li>
                                <li>Guildford</li>
                                <li>Dorking</li>
                                <li>Working</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </AreasStyles>
    )
}

export default Areas
