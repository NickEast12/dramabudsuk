import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import BlogCTA from '../components/sections/blogCTA'
import BlogHeader from '../components/sections/blogHeader'
import SingleBlog from '../components/sections/singleBlog'

const AllBlogSectionStyles = styled.section`
    width: 100%;
    padding: 3rem 0;
    background: var(--offWhite);
    .blogs {
        width: 90%;
        margin: var(--auto);
        max-width: var(--maxWidth);
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        @media only screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
        }
        @media only screen and (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
        }
    }
`
const AllBlogs = ({ data }) => {
    const allBlogs = data.blogs.nodes
    console.log(allBlogs)
    return (
        <Layout alt>
            <BlogHeader
                title="All Blogs"
                description="The latest news from Dramabuds"
            />
            <AllBlogSectionStyles>
                <div className="blogs">
                    {allBlogs.map((blog) => (
                        <SingleBlog key={blog.id} data={blog} />
                    ))}
                </div>
            </AllBlogSectionStyles>
            <BlogCTA />
        </Layout>
    )
}

AllBlogs.propTypes = {
    data: PropTypes.shape({
        blogs: PropTypes.shape({
            nodes: PropTypes.shape({
                map: PropTypes.func,
            }),
        }),
    }),
}

export default AllBlogs

export const AllBlogsQuery = graphql`
    query AllBlogQuery {
        blogs: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
            nodes {
                title
                id
                excerpt
                readingTimeInMinutes
                slug {
                    current
                }
                publishedAt(formatString: "MMM DD YYYY")
                _rawBody
                authors {
                    author {
                        name
                        position
                        image {
                            alt
                            asset {
                                gatsbyImageData(
                                    width: 200
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
                mainImage {
                    alt
                    asset {
                        gatsbyImageData(
                            width: 500
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`
