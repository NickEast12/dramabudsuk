import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import BlogHeader from '../components/sections/blogHeader'
import BlogSection from '../components/sections/blogSection'
import BlogCTA from '../components/sections/blogCTA'

const Blog = ({ data }) => {
    const allBlogs = data.blogs.nodes
    const featuredBlog = data.featuredBlog.nodes[0]
    return (
        <Layout>
            <BlogHeader />
            <BlogSection feaBlog={featuredBlog} filteredBlogs={allBlogs} />
            <BlogCTA />
        </Layout>
    )
}

Blog.propTypes = {
    data: PropTypes.shape({
        blogs: PropTypes.shape({
            nodes: PropTypes.any,
        }),
        featuredBlog: PropTypes.shape({
            nodes: PropTypes.any,
        }),
        nodes: PropTypes.any,
    }),
}

export default Blog

export const blogQuery = graphql`
    query BlogQuery {
        blogs: allSanityPost(
            sort: { fields: publishedAt, order: DESC }
            skip: 1
        ) {
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
        featuredBlog: allSanityPost(
            sort: { fields: publishedAt, order: DESC }
            limit: 1
        ) {
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
