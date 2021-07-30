import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import PortableText from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'
import getYouTubeId from 'get-youtube-id'
import { window } from 'browser-monads'
import YouTube from 'react-youtube'
import {
 TwitterShareButton,
 EmailShareButton,
 LinkedinShareButton,
 FacebookShareButton,
} from 'react-share'
import Layout from '../components/Layout'
import BlogCTA from '../components/sections/blogCTA'
import Image from '../components/functional/Image'
import FacebookIcon from '../svgs/facebook.svg'
import TwitterIcon from '../svgs/twitter.svg'
import LinkedInIcon from '../svgs/linkedin.svg'
import EmailIcon from '../svgs/paper-plane.svg'

const BlogBodyStyles = styled.section`
 width: 100%;
 background: var(--offWhite);
 section {
  padding: 2rem 0;
  width: 80%;
  margin: var(--auto);
  max-width: 700px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
   margin: 1rem 0;
  }
  p {
   line-height: 1.45;
   font-size: 1.1rem;
   margin: 0 0 1.2rem 0;
  }
  ul {
   list-style: inside;
  }
  ol {
   list-style-position: inside;
  }
  li {
   margin: 0.5rem 0;
   line-height: 1.45;
   font-size: 1.1rem;
  }
  a {
   color: var(--newCyan);
   font-weight: 800;
  }
  .image {
   img {
    width: 100%;
    height: auto;
   }
  }
  iframe {
   width: 100%;
  }
 }
`

const urlFor = (source) =>
 urlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
 }).image(source)

const BlogsTemplate = ({ data }) => {
 const blog = data.Blog
 const serializers = {
  types: {
   mainImage: (props) => (
    <div className="image">
     <img
      src={`${urlFor(props.node.asset)
       .width(1388)
       .height(926)
       .fit('crop')
       .auto('format')}`}
      alt="Dramabuds | Blog"
     />
    </div>
   ),
   videoEmbed: ({ node }) => {
    const { url } = node
    const id = getYouTubeId(url)
    return <YouTube videoId={id} className="video" />
   },
  },
 }
 return (
  <Layout alt>
   <article>
    <TemplateHeader data={blog} />
    <BlogBodyStyles>
     <section>
      <PortableText blocks={blog._rawBody} serializers={serializers} />
     </section>
    </BlogBodyStyles>
   </article>
   <BlogCTA />
  </Layout>
 )
}

BlogsTemplate.propTypes = {
 data: PropTypes.any,
}

export default BlogsTemplate

const TemplateHeaderStyles = styled.header`
 width: 100%;
 padding: 6rem 0 3rem 0;
 .t-h {
  width: 90%;
  margin: var(--auto);
  max-width: 950px;
  span {
   color: var(--secondary);
   font-weight: 700;
   font-size: 1.2rem;
  }
  h1 {
   margin-top: 1rem;
   font-weight: 500;
  }
  &__data {
   border-top: solid 1px rgba(0, 0, 0, 0.1);
   margin-top: 1rem;
   &__author {
    padding: 1rem 0 0.5rem 0.25rem;
    display: flex;
    align-items: center;
    section {
     position: relative;
     .gatsby-image-wrapper {
      border-radius: 5px;
      width: 50px;
      height: 50px;
      border: solid 3px #151417;
      z-index: 99;
     }
     .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      bottom: -5px;
      left: -5px;
      background-color: var(--secondary);
      border: solid 3px #151417;
      border-radius: 5px;
      z-index: 4;
     }
    }
    .info {
     margin-left: 15px;
     h6 {
      font-size: 1.2rem;
     }
     p {
      font-weight: 700;
     }
    }
   }
   &__icons {
    display: flex;
    width: 200px;
    margin-top: 1.55rem;
    justify-content: space-between;
    svg {
     width: 25px;
     height: 25px;
     fill: var(--secondary);
    }
   }
   @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
   }
  }
  > .gatsby-image-wrapper {
   border-radius: 4.5px;
   margin-top: 2rem;
  }
 }
`
const TemplateHeader = ({ data }) => {
 const { author } = data.authors[0]
 const image = getImage(author.image.asset)
 return (
  <TemplateHeaderStyles>
   <div className="t-h">
    <span>{`${data.publishedAt} | ${data.readingTimeInMinutes} min read`}</span>
    <h1>{data.title}</h1>
    <div className="t-h__data">
     <section className="t-h__data__author">
      <section>
       <GatsbyImage image={image} alt={author.image.alt} />
       <div className="overlay" />
      </section>
      <div className="info">
       <h6>{author.name}</h6>
       <p>{author.position}</p>
      </div>
     </section>
     <div className="t-h__data__icons">
      <EmailShareButton url={window.location.href} subject={data.title}>
       <div className="share--box email">
        <EmailIcon />
       </div>
      </EmailShareButton>
      <TwitterShareButton url={window.location.href} title={data.title}>
       <div className="share--box twitter">
        <TwitterIcon />
       </div>
      </TwitterShareButton>
      <LinkedinShareButton
       url={window.location.href}
       summary={data.excerpt}
       source="UCtel Blog"
      >
       <div className="share--box linkedin">
        <LinkedInIcon />
       </div>
      </LinkedinShareButton>
      <FacebookShareButton url={window.location.href} quote={data.title}>
       <div className="share--box facebook">
        <FacebookIcon />
       </div>
      </FacebookShareButton>
     </div>
    </div>
    <Image data={data} />
   </div>
  </TemplateHeaderStyles>
 )
}

TemplateHeader.propTypes = {
 data: PropTypes.shape({
  authors: PropTypes.any,
  publishedAt: PropTypes.any,
  readingTimeInMinutes: PropTypes.any,
  title: PropTypes.any,
  excerpt: PropTypes.any,
 }),
}

export const query = graphql`
 query TemplateBlogQuey($slug: String!) {
  Blog: sanityPost(slug: { current: { eq: $slug } }) {
   title
   slug {
    current
   }
   publishedAt(formatString: "MMM DD YYYY")
   readingTimeInMinutes
   id
   excerpt
   categories {
    title
   }
   _rawBody
   authors {
    author {
     name
     id
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
      width: 2000
      placeholder: BLURRED
      formats: [AUTO, WEBP, AVIF]
     )
     url
    }
   }
  }
 }
`
