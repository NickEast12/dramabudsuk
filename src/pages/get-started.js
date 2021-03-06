import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import GlobalStyles from '../styles/GlobalStyles'
import ArrowIcon from '../svgs/arrow-right.svg'
import SEO from '../components/functional/SEO'

const GetStartedStyles = styled.section`
 width: 100%;
 .g-s {
  width: 85%;
  margin: var(--auto);
  @media only screen and (min-width: 768px) {
   height: 100vh;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 35%;
  }
  @media only screen and (min-width: 1200px) {
   grid-template-columns: 1fr 40%;
  }
  &__form {
   padding: 2.5rem 0 2rem 0;
   max-width: var(--maxWidth);
   margin: var(--auto);
   svg {
    width: 50px;
    height: 50px;
    transform: scaleX(-1);
    border-radius: 100%;
    border: solid 2px var(--secondary);
    padding: 0.5rem;
    margin-bottom: 1rem;
    fill: var(--secondary);
   }
   h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--secondary);
   }
   p {
    margin-top: 1rem;
   }
   form {
    margin-top: 1.5rem;
    label {
     display: block;
     font-size: 1rem;
     font-weight: 500;
    }
    section {
     .c-l {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      input {
       margin-top: 0.5rem;
       width: 100%;
       padding: 10px 0.5rem;
       line-height: 1.5;
       border: solid 1px rgba(0, 0, 0, 0.2);
       border-radius: 4.5px;
       font-size: 0.95rem;
      }
     }
     @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
     }
    }
    textarea {
     width: 100%;
     height: 7rem;
     margin-top: 0.5rem;
     resize: vertical;
     border: solid 1px rgba(0, 0, 0, 0.2);
     border-radius: 4.5px;
    }
    .btn__wrapper {
     button {
      margin: 1rem 0 0 0;
      padding: 1rem 0;
      width: 100%;
      border-radius: 5px;
      background-color: var(--secondary);
      span {
       font-size: 1rem;
      }
      @media only screen and (min-width: 1024px) {
       width: 48%;
      }
     }
     a {
      margin: 1.5rem 0;
      display: block;
      span {
       text-decoration: underline var(--secondary);
       color: var(--secondary);
       font-size: 1.15rem;
      }
     }
     @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      button {
       height: 3rem;
       width: 100%;
      }
      a {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       padding-left: 15px;
       padding-top: 4px;
      }
     }
    }

    .legal {
     text-align: center;
     margin-top: 1rem;
     a {
      color: var(--secondary);
      text-decoration: underline var(--secondary);
     }
     @media only screen and (min-width: 1024px) {
      text-align: left;
     }
    }
    @media only screen and (min-width: 1200px) {
     width: 100%;
    }
   }

   @media only screen and (min-width: 768px) {
    width: 100%;
    margin: var(--auto);
    padding-top: 6rem;
    &--flex {
     max-width: var(--maxWidth);
     display: flex;
     flex-direction: column;
     width: 80%;
     margin: var(--auto);
    }
   }
   @media only screen and (min-width: 1024px) {
    padding-top: 10rem;
    &--flex {
     max-width: var(--maxWidth);
     display: flex;
     flex-direction: column;
     width: 70%;
     margin: var(--auto);
    }
   }
   @media only screen and (min-width: 1200px) {
    padding: 6rem 0 0 3rem;
    &--flex {
     justify-content: center;
    }
   }
   @media only screen and (min-width: 1600px) {
    padding: 10rem 0 0 4rem;
   }
  }
  &__img {
   display: none;
   @media only screen and (min-width: 768px) {
    display: block;
    .gatsby-image-wrapper {
     width: 100%;
     height: 100%;
    }
   }
  }
 }
`
const GetStarted = ({ location, data }) => {
 const { email } = location.state || ''
 const file = data.allFile.edges[0].node.publicURL
 return (
  <main>
   <SEO
    title="Franchising Opportunity with Dramabuds | Get in touch | Dramabuds"
    description="Fill out our form to receive more information about franchising with Dramabuds and get started on your franchise journey today!"
   />
   <GlobalStyles />
   <GetStartedStyles>
    <div className="g-s">
     <div className="g-s__form">
      <div className="g-s__form--flex">
       <span>
        <Link to="/">
         <ArrowIcon />
        </Link>
       </span>
       <h1>Let's get some info</h1>
       <p>
        If you want to find out more about starting your dramabuds franchise
        journey, we???d love to hear from you.
       </p>
       <form
        name="contact_form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
       >
        <input type="hidden" name="form-name" value="contact_form" />
        <p className="hidden">
         <labe htmlFor="bot-field">
          Don???t fill this out if you???re human: <input name="bot-field" />
         </labe>
        </p>
        <section>
         <div className="c-l">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="firstName" required />
         </div>
         <div className="c-l">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="lastName" required />
         </div>
        </section>
        <section>
         <div className="c-l">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email address</label>
          {email ? (
           <input
            type="email"
            name="email"
            id="email"
            defaultValue={email}
            required
           />
          ) : (
           <input type="email" name="email" id="email" required />
          )}
         </div>
         <div className="c-l">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="Phone">Phone</label>
          <input type="rel" name="phone" id="phone" />
         </div>
        </section>
        <div className="btn__wrapper">
         <button type="submit" className="btn btn--main">
          <span>Submit</span>
         </button>
         <a href={file} download target="_blank" rel="noopener noreferrer">
          <span>Download Franchise Pack</span>
         </a>
        </div>

        <p className="legal">
         By contacting us your are agreeing to our{' '}
         <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
       </form>
      </div>
     </div>
     <div className="g-s__img">
      <StaticImage
       src="../assets/images/get-started.jpeg"
       alt="Get Started with Dramabuds UK | Dramabuds UK"
       placeholder="blurred"
      />
     </div>
    </div>
   </GetStartedStyles>
  </main>
 )
}

export default GetStarted

export const query = graphql`
 {
  allFile(filter: { extension: { eq: "pdf" } }) {
   edges {
    node {
     publicURL
    }
   }
  }
 }
`

GetStarted.propTypes = {
 data: PropTypes.shape({
  allFile: PropTypes.shape({
   edges: PropTypes.any,
  }),
 }),
 location: PropTypes.shape({
  state: PropTypes.shape({
   email: PropTypes.any,
  }),
 }),
}
