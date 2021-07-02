import React from 'react'
import styled from 'styled-components'

const SecondCTAStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary);
    .s-cta {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        color: var(--white);
        h5 {
            text-align: center;
            font-weight: 700;
        }
        p {
            margin: 1rem auto;
            text-align: center;
            max-width: 650px;
        }
        button {
            margin-top: 1.5rem;
        }
    }
`
const SecondCTA = () => (
    <SecondCTAStyles>
        <div className="s-cta">
            <h5>Request information pack</h5>
            <p>
                If this sounds perfect to you and you’re ready for flexibility,
                fun and a brand, new franchise, our application process is
                simple.
            </p>
            <button type="button" className="btn btn--main">
                <span>Get started</span>
            </button>
        </div>
    </SecondCTAStyles>
)

export default SecondCTA
