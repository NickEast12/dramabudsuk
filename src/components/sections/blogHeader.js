import React from 'react'
import styled from 'styled-components'

const BlogHeaderStyles = styled.header`
    width: 100%;
    padding: 6rem 0 4rem 0;
    .b-h {
        text-align: center;
        width: 90%;
        margin: var(--auto);
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
        }
    }
`
const BlogHeader = () => {
    const i = true
    return (
        <BlogHeaderStyles>
            <div className="b-h">
                <h1>Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

export default BlogHeader
