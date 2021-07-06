import React from 'react'
import styled from 'styled-components'
import CareerIcon from '../../svgs/directions.svg'
import BusinessIcon from '../../svgs/idea.svg'
import DevelopIcon from '../../svgs/rocket.svg'
import AreaIcon from '../../svgs/placeholder.svg'

const OpportunityStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    margin-top: -8.5rem;
    .o-p {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        h3 {
            text-align: center;
            font-weight: 700;
            color: var(--secondary);
        }
        > p {
            margin-top: 1rem;
            text-align: center;
            font-weight: 300;
        }
        &__cards {
            display: grid;
            margin: 2rem auto 0 auto;
            grid-gap: 2.5rem;
            width: 80%;

            &__single {
                position: relative;
                width: 95%;
                margin: 0 0 0 auto;
                section {
                    background-color: var(--white);
                    border: solid 3px #151417;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    position: relative;
                    z-index: 50;
                    h6 {
                        width: 100%;
                        text-align: center;
                        font-weight: 400;
                        margin-top: 0.5rem;
                        font-size: 1.2rem;
                    }
                    svg {
                        width: 60px;
                        height: 60px;
                    }
                }
                .overlay {
                    width: 100%;
                    height: 100%;
                    content: '';
                    position: absolute;
                    border-radius: 5px;
                    bottom: -0.65rem;
                    left: -0.65rem;
                    /* background-color: var(--first); */
                    border: solid 3px #151417;
                    z-index: 2;
                }
                &:nth-child(1) {
                    .overlay {
                        background-color: var(--first);
                    }
                }
                &:nth-child(2) {
                    .overlay {
                        background-color: var(--secondary);
                    }
                }
                &:nth-child(3) {
                    .overlay {
                        background-color: var(--tertiary);
                    }
                }
                &:nth-child(4) {
                    .overlay {
                        background-color: #ffef00;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 768px) {
        padding-top: 0;
        .o-p {
            > p {
                max-width: 700px;
                margin: var(--auto);
                padding-top: 1rem;
            }
            &__cards {
                grid-template-columns: repeat(2, 1fr);
                section {
                    height: 100%;
                    align-items: center;
                    justify-content: baseline;
                    padding: 1rem 0.75rem;
                }
            }
        }
    }
    @media only screen and (min-width: 1024px) {
        .o-p {
            &__cards {
                grid-template-columns: repeat(4, 1fr);
                padding-bottom: 2rem;
            }
        }
    }
`
const Opportunity = () => {
    const i = true
    return (
        <OpportunityStyles>
            <div className="o-p">
                <h3>Why dramabuds?</h3>
                <p>
                    If you’re looking for a flexible career that’s rewarding,
                    fun and makes a difference to families in your local area,
                    dramabuds is perfect for you. Whether you want to grow your
                    franchise, work at a pace that suits you or just enjoy
                    running your own business, you will find all of this and
                    more at dramabuds.
                </p>
                <div className="o-p__cards">
                    <div className="o-p__cards__single">
                        <section>
                            <CareerIcon />
                            <h6>Flexible, rewarding career</h6>
                        </section>
                        <div className="overlay" />
                    </div>
                    <div className="o-p__cards__single">
                        <section>
                            <BusinessIcon />
                            <h6>Run your own small business</h6>
                        </section>
                        <div className="overlay" />
                    </div>
                    <div className="o-p__cards__single">
                        <section>
                            <DevelopIcon />
                            <h6>Help children grow and develop</h6>
                        </section>
                        <div className="overlay" />
                    </div>
                    <div className="o-p__cards__single">
                        <section>
                            <AreaIcon />
                            <h6>Make a difference in your area</h6>
                        </section>
                        <div className="overlay" />
                    </div>
                </div>
            </div>
        </OpportunityStyles>
    )
}

export default Opportunity
