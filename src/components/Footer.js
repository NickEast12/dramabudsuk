import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import FullLogo from '../svgs/dramabuds-logo.svg'
import FaceBookIcon from '../svgs/facebook.svg'
import InstagramIcon from '../svgs/instagram.svg'
import TwitterIcon from '../svgs/twitter.svg'

const FooterStyles = styled.footer`
 width: 100%;
 background: var(--white);
 padding: 1.5rem 0 0 0;
 border-top: solid 1px rgba(0, 0, 0, 0.1);
 .footer {
  width: 90%;
  margin: var(--auto);
  max-width: var(--maxWidth);
  &__left {
   &__logo {
    width: 250px;
    margin: var(--auto);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
     width: 100%;
    }
   }
   p {
    text-align: center;
    margin-top: 1.5rem;
   }
   section {
    text-align: center;
    margin-top: 1.5rem;
    h6 {
     font-weight: 700;
    }
    ul {
     list-style: none;
     margin-top: 1rem;
     display: grid;
     grid-template-columns: 1fr 1fr;
     li {
      padding: 0.45rem 0;
      a {
      }
     }
    }
   }
  }
  &__right {
   margin-top: 1.5rem;
   h5 {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
   }
   form {
    margin: var(--auto);
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    input,
    button {
     padding: 1rem 0.65rem;
     border: none;
     width: 100%;
    }
    input {
     color: #000;
     background-color: var(--offWhite);
     border-radius: 4.5px 4.5px 0 0;
     border: 1px red var(--white);
     line-height: 1.3;
     text-align: center;
     &::placeholder {
      text-align: center;
     }
    }
    button {
     background-color: var(--secondary);
     border-radius: 0 0 4.5px 4.5px;
     color: var(--white);
     line-height: 1.3;
    }
   }
   p {
    text-align: center;
    margin-top: 1.5rem;

    font-size: 1.2rem;
   }
   &__icons {
    margin: 1rem 0 2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
     width: 30px;
     height: 30px;
     fill: var(--secondary);
    }
   }
  }
  @media only screen and (min-width: 768px) {
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 1.5rem 0 3rem 0;
   &__left {
    &__logo {
     margin: 0 auto 0 0;
    }
    p {
     text-align: left;
    }
    section {
     text-align: left;
     ul {
      width: 350px;
     }
    }
   }
   &__right {
    margin-top: 0%;
    h5 {
     text-align: right;
    }
    form {
     flex-direction: row;
     margin: 0 0 0 auto;
     input {
      border-radius: 4.5px 0 0 4.5px;
     }
     button {
      width: 185px;
      border-radius: 0 4.5px 4.5px 0;
     }
    }
    p {
     text-align: right;
    }
    &__icons {
     margin: 1rem 0 0 auto;
     max-width: 150px;
     justify-content: space-between;
    }
   }
  }
 }
 .legal {
  width: 100%;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  ul {
   max-width: var(--maxWidth);
   width: 90%;
   margin: var(--auto);
   max-width: var(--maxWidth);
   display: flex;
   align-items: center;
   justify-content: space-between;
   list-style: none;
   li {
    a {
     color: var(--black);
     font-size: 0.85rem;
    }
   }
  }
 }
`
const Footer = () => {
 const i = true
 return (
  <FooterStyles>
   <div className="footer">
    <div className="footer__left">
     <div className="footer__left__logo">
      <FullLogo />
     </div>

     <section>
      <h6>Quick links</h6>
      <ul>
       <li>
        <Link to="/">Home</Link>
       </li>
       <li>
        <Link to="/#about">About</Link>
       </li>
       <li>
        <Link to="/#opportunity">Opportunity</Link>
       </li>
       <li>
        <Link to="/#areas">Areas</Link>
       </li>
       <li>
        <Link to="/blog">Blog</Link>
       </li>
       <li>
        <Link to="/get-started">Get started</Link>
       </li>
      </ul>
     </section>
    </div>
    <div className="footer__right">
     <h5>Sign up to our newsletter</h5>
     <form
      name="email_signup"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
     >
      <input type="hidden" name="form-name" value="email_signup" />
      <p className="hidden">
       <labe htmlFor="bot-field">
        Don’t fill this out if you’re human: <input name="bot-field" />
       </labe>
      </p>
      <input
       type="email"
       name="email"
       id="email"
       required
       placeholder="Email address"
      />
      <button type="submit">
       <span>Submit</span>
      </button>
     </form>
     <p>www.dramabuds.co.uk</p>
     <div className="footer__right__icons">
      <a href="http://" target="_blank" rel="noopener noreferrer">
       <FaceBookIcon />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
       <TwitterIcon />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
       <InstagramIcon />
      </a>
     </div>
    </div>
   </div>
   <div className="legal">
    <ul>
     <li>
      <Link to="/privacy-policy">Privacy Policy</Link>
     </li>
     <li>
      <Link to="/cookie-policy">Cookie Policy</Link>
     </li>
    </ul>
   </div>
  </FooterStyles>
 )
}

export default Footer
