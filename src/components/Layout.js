import PropTypes from 'prop-types'
import React from 'react'
import 'normalize.css'
//* Local imports
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'
import Footer from './Footer'

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
 // eslint-disable-next-line global-require
 require('smooth-scroll')('a[href*="#"]')
}
const Layout = ({ children, alt }) => {
 const i = true
 return (
  <>
   <GlobalStyles />
   <Nav alt={alt ? 'alt' : ''} />
   <main>{children}</main>
   <Footer />
  </>
 )
}

Layout.propTypes = {
 alt: PropTypes.any,
 children: PropTypes.any,
}

export default Layout
