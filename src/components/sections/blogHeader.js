import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BlogHeaderStyles = styled.header`
    width: 100%;
    padding: 6rem 0 4rem 0;
    @media only screen and (min-width: 768px) {
        padding-bottom: 2rem;
    }
    .b-h {
        text-align: center;
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        h1 {
            font-weight: 700;
        }
        p {
            margin-top: 1rem;
        }
        form {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            input {
                padding: 0.85rem 0.9rem;
                border-radius: 4.5px;
                border: none;
                background: var(--offWhite);
            }
            button {
                margin-top: 0.5rem;
                padding: 0.85rem 0.9rem;
                border-radius: 4.5px;
                border: none;
                background: var(--secondary);
                span {
                    color: var(--white);
                }
            }
            @media only screen and (min-width: 768px) {
                flex-direction: row;
                max-width: 500px;
                margin: 1.5rem auto;
                button {
                    margin-top: 0;
                    width: 200px;
                    border-radius: 0 4.5px 4.5px 0;
                }
                input {
                    width: 100%;
                    border-radius: 4.5px 0 0 4.5px;
                }
            }
        }
    }
`
const BlogHeader = ({ title, description }) => {
    const i = true
    return (
        <BlogHeaderStyles>
            <div className="b-h">
                <h1>{title}</h1>
                <p>{description}</p>
                <form action="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your email address"
                    />
                    <button type="submit">
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>
        </BlogHeaderStyles>
    )
}

BlogHeader.propTypes = {
    description: PropTypes.any,
    title: PropTypes.any,
}

export default BlogHeader
