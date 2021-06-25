import React from 'react'
import styled from 'styled-components'
import UKIcon from '../../svgs/united-kingdom.svg'

const AreasStyles = styled.section`
    width: 100%;
    padding: 5rem 0 3rem 0;
    .areas {
        width: 90%;
        margin: var(--auto);
        text-align: center;
        h4 {
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
    }
`
const Areas = () => {
    const i = true
    return (
        <AreasStyles>
            <div className="areas">
                <h4>Areas covered</h4>
                <p>
                    Dramabuds is UK-wide, so wherever you are in the country,
                    you can build a franchise for your local community.
                </p>
                <div className="areas__map">
                    <UKIcon />
                </div>
            </div>
        </AreasStyles>
    )
}

export default Areas
