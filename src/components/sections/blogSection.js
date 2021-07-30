import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SingleBlog from './singleBlog'
import Image from '../functional/Image'
import TwinkleIcon from '../../svgs/shines.svg'

const BlogSectionStyles = styled.section`
 width: 100%;
 padding: 2rem 0;
 background-color: var(--offWhite);
 .b-s {
  width: 90%;
  margin: var(--auto);
  max-width: var(--maxWidth);
  &__featured {
  }
  &__grid {
   margin-top: 1rem;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-gap: 2rem;
   @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
   }
   @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1.5rem;
   }
  }
  span {
   a {
    button {
     width: 150px;
     margin-top: 2rem;
    }
   }
  }
 }
`
const BlogSection = ({ feaBlog, filteredBlogs }) => {
 const i = true
 return (
  <BlogSectionStyles>
   <div className="b-s">
    <div className="b-s__featured">
     <FeaturedBlog data={feaBlog} />
    </div>
    <div className="b-s__grid">
     {filteredBlogs.map((blog) => (
      <SingleBlog data={blog} key={blog.id} />
     ))}
    </div>
    <span>
     <Link to="/all-blogs">
      <button type="button" className="btn btn--main">
       <span>View more</span>
      </button>
     </Link>
    </span>
   </div>
  </BlogSectionStyles>
 )
}

BlogSection.propTypes = {
 feaBlog: PropTypes.any,
 filteredBlogs: PropTypes.any,
}

export default BlogSection

const FeaturedBlogStyles = styled.article`
 width: 100%;
 height: 100%;
 .fea {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: transparent 2px solid;
  border-radius: 8.5px;
  transition: all 0.15s ease-in-out;
  &:hover {
   border: solid #600eff 2px;
   transform: translateY(-10px);
  }
  &__img {
   position: relative;
   width: 100%;
   height: 100%;
   .gatsby-image-wrapper {
    width: 100%;
    height: 250px;
    border-radius: 8.5px 8.5px 0 0;
    @media only screen and (min-width: 768px) {
     border-radius: 8.5px 0 0 8.5px;
     height: 100%;
    }
   }
   .overlay {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #600eff;
    border: solid 2px #151417;
    border-radius: 4.5px;
    padding: 0.45rem;
    svg {
     width: 20px;
     height: 20px;
    }
    p {
     color: var(--white);
     padding-left: 7.5px;
    }
    @media only screen and (min-width: 414px) {
    }
   }
  }
  &__main {
   background-color: var(--white);
   border-radius: 0 0 8.5px 8.5px;
   padding: 1rem;
   h4 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--secondary);
   }
   h2 {
    margin: 0.5rem 0;
    font-size: 1.75rem;
    font-weight: 500;
   }
   > p {
    font-weight: 700;
    color: var(--secondary);
   }
   &__author {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
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
    @media only screen and (min-width: 768px) {
     padding-top: 2rem;
    }
   }
   @media only screen and (min-width: 768px) {
    border-radius: 0 8.5px 8.5px 0;
    padding-top: 2rem;
   }
   /* padding: 1.5rem 2rem; */
  }
  @media only screen and (min-width: 768px) {
   a {
    display: grid;
    grid-template-columns: 45% 1fr;
   }
  }
 }
`
const FeaturedBlog = ({ data }) => {
 const { author } = data.authors[0]
 const image = getImage(author.image.asset)
 return (
  <FeaturedBlogStyles>
   <div className="fea">
    <Link to={data.slug.current}>
     <div className="fea__img">
      <Image data={data} />
      <div className="overlay">
       <TwinkleIcon />
       <p>Featured</p>
      </div>
     </div>
     <div className="fea__main">
      <h4>Blog</h4>
      <h2>{data.title}</h2>
      <p>{`${data.publishedAt} | ${data.readingTimeInMinutes} min read`}</p>
      <section className="fea__main__author">
       <section>
        <GatsbyImage image={image} alt={author.image.alt} />
        <div className="overlay" />
       </section>
       <div className="info">
        <h6>{author.name}</h6>
        <p>{author.position}</p>
       </div>
      </section>
     </div>
    </Link>
   </div>
  </FeaturedBlogStyles>
 )
}

FeaturedBlog.propTypes = {
 data: PropTypes.shape({
  authors: PropTypes.any,
  publishedAt: PropTypes.any,
  readingTimeInMinutes: PropTypes.any,
  slug: PropTypes.shape({
   current: PropTypes.any,
  }),
  title: PropTypes.any,
 }),
}
