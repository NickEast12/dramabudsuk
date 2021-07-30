import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import BlogHeader from '../components/sections/blogHeader'
import BlogSection from '../components/sections/blogSection'
import BlogCTA from '../components/sections/blogCTA'
import Testimonial from '../components/sections/Testimonial'

const Blog = ({ data }) => {
 const allBlogs = data.blogs.nodes
 const featuredBlog = data.featuredBlog.nodes[0]
 return (
  <Layout alt>
   <BlogHeader
    title="Blog"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
   />
   <BlogSection feaBlog={featuredBlog} filteredBlogs={allBlogs} />
   <Testimonial
    quote="Becca was really supportive and helpful, meeting up with me regularly to answer any questions and give advice, but also allowing me to have autonomy of the franchise"
    name="Rachel Drew"
    location="Dramabuds, Coulsdon"
   >
    <StaticImage
     src="../assets/images/rachel.jpg"
     alt="Georgia Thompson | Dramabuds Wandsworth "
     placeholder="blurred"
    />
   </Testimonial>
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
  blogs: allSanityPost(sort: { fields: publishedAt, order: DESC }, skip: 1) {
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
       width: 900
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
         width: 400
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
       width: 900
       placeholder: BLURRED
       formats: [AUTO, WEBP, AVIF]
      )
     }
    }
   }
  }
 }
`
